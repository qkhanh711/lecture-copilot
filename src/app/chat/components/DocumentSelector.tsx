"use client"

import {useContext} from "react";
import {DocumentSelectionContext, DocumentsStateProps} from "@/app/context/document-selection.context";

interface DocumentSelectorProps {
	state: DocumentsStateProps,
	dispatcher: any
}

export default function DocumentSelector(props: DocumentSelectorProps)
{
	const {state, dispatcher} = {...props};
	return(
		<div className={'bg-[#000000] px-4 py-8 h-screen text-white'}>
			{state.listFile.map((file, index) => {
				return(
					<div key={index} className={'flex flex-row items-center space-x-2'}>
						<button className={`block w-full text-white px-4 py-2 ${state.currentFile === index && "bg-blue-950"} `} onClick={() => dispatcher({...state,currentFile: index})}>
							{file.name}
						</button>
						{/*<button className={'text-white'} onClick={() => dispatcher({listFile: state.listFile.filter((_, i) => i !== index)})}>*/}
						{/*	Delete*/}
						{/*</button>*/}
					</div>
				)
			})}
		</div>
	)
}