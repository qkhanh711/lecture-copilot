"use client"
import React, {createContext, useState} from "react";
import Queue, { DummyQueue } from "@/func/DS/Queue";

export enum MessageRole {
	GPT = "GPT",
	USER = "USER"
}
export interface MessageProperties {
	role: MessageRole,
	message: string,
	timestamp: Date
}

export interface PDFProperties{
	name: string,
	url: string,
	history: Queue<MessageProperties>;
}
export interface DocumentsStateProps {
	listFile: PDFProperties[],
	currentFile: number
}

const initialState: DocumentsStateProps = {
	listFile: [
		{
			name: "Monte Cristo 1", 
			url: "https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf",
			history: DummyQueue()
		},
		{
			name: "Monte Cristo 2", 
			url: "https://www.africau.edu/images/default/sample.pdf",
			history: DummyQueue()
		}
	],
	currentFile: 0
}

export interface DocumentContextProps {
	state: DocumentsStateProps,
	dispatcher: any
}

export const DocumentSelectionContext = createContext<DocumentContextProps>({state: initialState, dispatcher: null});

export const DocumentSelectionContextProvider = ({children}: {children: React.ReactNode}) =>
{
	const [state, setState] = useState(initialState);
	return(
		<DocumentSelectionContext.Provider value={ {state: state, dispatcher: setState} }>
			{children}
		</DocumentSelectionContext.Provider>
	)
}