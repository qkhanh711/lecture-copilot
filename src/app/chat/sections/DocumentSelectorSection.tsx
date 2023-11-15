"use client"
import {useContext} from "react";
import {DocumentSelectionContext} from "@/app/context/document-selection.context";
import DocumentSelector from "@/app/chat/components/DocumentSelector";

export default function DocumentSelectorSection()
{
	let {state, dispatcher} = useContext(DocumentSelectionContext);
	return(
		<>
			<DocumentSelector state={state} dispatcher={dispatcher}/>
		</>
	)
}