"use client"
import {useContext} from "react";
import {DocumentSelectionContext} from "@/app/context/document-selection.context";
import DocumentSelector from "@/app/chat/components/DocumentSelector";
import DocumentUploader from "@/app/chat/components/DocumentUploader";
import {FileUploadingContext} from "@/app/context/file-uploading.context";

export default function DocumentSelectorSection()
{
	let {documentSelectionState, documentSelectionDispatcher} = useContext(DocumentSelectionContext);
	let {fileUploadingState, fileUploadingDispatcher} = useContext(FileUploadingContext);
	
	return(
		<div className={'flex flex-col bg-[#000000] px-4 py-8 h-screen text-white gap-4'}>
			<DocumentUploader fileUploadingState={fileUploadingState} fileUploadingDispatcher={fileUploadingDispatcher}/>
			<DocumentSelector state={documentSelectionState} dispatcher={documentSelectionDispatcher}/>
		</div>
	)
}