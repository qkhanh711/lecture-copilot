"use client"
import {DocumentSelectionContext} from "@/app/context/document-selection.context";
import {useContext} from "react";
import {PDFViewer} from "@/components/ui/PDFViewer";

export default function PDFSection() {
	const documentContext = useContext(DocumentSelectionContext);
	const [state, dispatcher] = [documentContext.documentSelectionState, documentContext.documentSelectionDispatcher];
	return (
		<div className="h-screen w-full pt-4">
			<PDFViewer url={state.listFile[state.currentFile].url} />
		</div>
	)
}