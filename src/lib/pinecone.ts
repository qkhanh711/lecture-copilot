import {Pinecone, PineconeRecord, utils as PineconeUtils} from '@pinecone-database/pinecone';
import {downloadFromS3} from "@/lib/s3-server";
import {PDFLoader} from "langchain/document_loaders/fs/pdf";
import {Document, RecursiveCharacterTextSplitter} from "@pinecone-database/doc-splitter";
import {getEmbeddings} from "@/lib/embeddings";
import md5 from "md5";
import {convertToAscii} from "../../utils";

export const pinecone = new Pinecone({
	apiKey: process.env.PINECONE_API_KEY ? process.env.PINECONE_API_KEY : "",
	environment: process.env.PINCONE_ENVIRONMENT ? process.env.PINCONE_ENVIRONMENT : "us-west1-gcp",
})

type PDFPage = {
	pageContent: string,
	metadata: {
		loc: { pageNumber: number }
	}
}

export async function loadS3IntoPinecone(fileKey: string) {
	// 1. obtain the pdf -> downlaod and read from pdf
	console.log("downloading s3 into file system");
	const file_name = await downloadFromS3(fileKey);
	if (!file_name) {
		throw new Error("could not download from s3");
	}
	console.log("loading pdf into memory" + file_name);
	const loader = new PDFLoader(file_name);
	const pages = (await loader.load()) as PDFPage[];
	
	// 2. split and segment the pdf
	const documents = await Promise.all(pages.map(prepareDocument));
	
	// 3. vectorise and embed individual documents
	const vectors = await Promise.all(documents.flat().map(embedDocument));
	
	// 4. upload to pinecone
	const pineconeIndex =  pinecone.index("lecture-copilot");
	const namespace = pineconeIndex.namespace(convertToAscii(fileKey));
	
	console.log("inserting vectors into pinecone");
	// @ts-ignore
	await namespace.upsert(vectors);
	
	return documents[0];
	
}

async function embedDocument(doc: Document)
{
	try{
		const embeddings = await getEmbeddings(doc.pageContent);
		const hash = md5(doc.pageContent);
		
		return {
			id: hash,
			values: embeddings,
			metadata: {
				text: doc.metadata.text,
				pageNumber: doc.metadata.pageNumber
			}
		} as PineconeRecord
	} catch (e)
	{
		console.log(e)
	}
}

async function prepareDocument(page: PDFPage) {
	let {pageContent, metadata} = {...page};
	pageContent = pageContent.replace(/\n/g, "");
	
	const splitter = new RecursiveCharacterTextSplitter();
	
	const docs = await splitter.splitDocuments(
		[
			new Document({
				pageContent,
				metadata: {
					pageNumber: metadata.loc.pageNumber,
					text: truncateStringByBytes(pageContent, 36000)
				}
			})
		]
	);
	return docs[0];
}

export const truncateStringByBytes = (str: string, bytes: number) => {
	const enc = new TextEncoder();
	return new TextDecoder('utf-8').decode(enc.encode(str).slice(0, bytes));
}