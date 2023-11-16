"use client"
import PDFSection from "@/app/chat/sections/PDFSection";
import ChatBarSection from "@/app/chat/sections/ChatBarSection";
import DocumentSelectorSection from "@/app/chat/sections/DocumentSelectorSection";
import UploadModalSection from "@/app/chat/sections/UploadModalSection";
import {FileUploadingContext, FileUploadingContextProvider} from "@/app/context/file-uploading.context";
import {useContext} from "react";
	
export default function Home()
{
	const {fileUploadingState, fileUploadingDispatcher} = useContext(FileUploadingContext);
	return (
		<>
			<div className={'grid grid-cols-[1fr,2fr,1fr] gap-4 pr-2 h-screen'}>
				{/*Left Side Bar to choose File*/}
				<DocumentSelectorSection/>
				
				{/*PDF Viewer*/}
				<PDFSection/>
				
				{/*Chat Bar*/}
				<div>
					<ChatBarSection/>
				</div>
			</div>
			{
				fileUploadingState.isLoading &&
					<UploadModalSection/>
			}
		</>
		
	)
}

