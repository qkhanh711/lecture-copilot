"use client"
import {FileUploadingContext} from "@/app/context/file-uploading.context";
import {useContext} from "react";
import { IoCloudDoneSharp } from "react-icons/io5";

interface Props{
	
}
export default function UploadModalSection(props: Props)
{
	const {fileUploadingState, fileUploadingDispatcher} = useContext(FileUploadingContext);
	return(
		<div className={'absolute top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.5)]'}>
			<div className="w-1/2 h-1/2 bg-white rounded-xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<div className="w-full text-3xl h-1/2 flex flex-col justify-center items-center">
					{fileUploadingState.fileName}
				</div>
				<div className={'flex flex-col justify-center items-center text-green-400 mb-2'}>
					{fileUploadingState.completed === 100 ? 
						<>
							<span className={'text-black'}>Uploaded Successfully</span>
							<div>
								<IoCloudDoneSharp size={70} color={'green'}/>
							</div>
						</>:
						<>
							<div className="inline-block w-20 h-20 border-8 border-t-amber-500 border-r-blue-500 border-b-rose-500 border-l-green-500 rounded-full animate-spin"></div>
						</>
					}
				</div>
				<div className={'flex justify-center items-center'}>
					<button disabled={ fileUploadingState.completed < 100 } className={'block px-4 py-2 h-1/2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 hover:cursor-pointer'} onClick={()=>{ fileUploadingDispatcher({isLoading: false, fileName:"", fileUrl:"", complete:0})}}>Close</button>
				</div>
			</div>
		</div>
	)
}