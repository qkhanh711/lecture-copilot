"use client"
import { CiCirclePlus } from "react-icons/ci";
import {getS3Url, uploadToS3} from "@/lib/s3";
import {useContext, useEffect} from "react";
import {DocumentSelectionContext, MessageProperties} from "@/app/context/document-selection.context";
import Queue from "@/func/DS/Queue";

interface DocumentUploaderProps {
	fileUploadingState: {
		isLoading: boolean,
		fileName: string,
		fileUrl: string,
		completed: number
	},
	fileUploadingDispatcher: any
}
export default function DocumentUploader(props: DocumentUploaderProps)
{
	const {fileUploadingState, fileUploadingDispatcher} = {...props};
	const {documentSelectionState, documentSelectionDispatcher} = useContext(DocumentSelectionContext);
	return (
		<div className={'flex justify-center items-center mx-4 hover:cursor-pointer'}>
			<label htmlFor={"pdf-upload"} className={"flex justify-center w-full px-4 py-2 border-[1px] rounded-2xl bg-blue-500 text-gray-400 hover:bg-blue-600 hover:cursor-pointer hover:text-white"}>
					<CiCirclePlus size={30}/>
			</label>
			<input id={'pdf-upload'}
			       className={"absolute opacity-0 z-[-1]"} 
			       onChange={
				async(event)=>
									{
										try {
											if ( event.target.files == null ) return;
											const file = event.target.files[0];
											fileUploadingDispatcher(
												{
													isLoading: true,
													fileName: file.name,
													fileUrl: "",
													completed:0
												}
											)
											const url = await uploadToS3(file);
											if (url == null) return;
											fileUploadingDispatcher(
												{
													isLoading: true,
													fileName: file.name,
													fileUrl: getS3Url(url.file_key),
													completed:100
												}
											);
											console.log(getS3Url(url.file_key));
											documentSelectionDispatcher(
												{
													listFile: [
														...documentSelectionState.listFile,
														{
															name: file.name,
															url: getS3Url(url.file_key),
															history: new Queue<MessageProperties>()
														}
													],
													currentFile: documentSelectionState.listFile.length
												});
										} catch (e) {
											console.log(e)
										}
									}} 
			       type={'file'} /> 
		</div>
	)	
}