"use client"
import React, {createContext, useState} from "react";
interface FileUploadingContextProps {
	fileUploadingState:
		{
			isLoading: boolean,
			fileName: string,
			fileUrl: string,
			completed: number		
		},
	fileUploadingDispatcher: any
}
const initialState = {
	isLoading: false,
	fileName: "",
	fileUrl: "",
	completed: 0
}

export const FileUploadingContext = createContext<FileUploadingContextProps>(
	{
		fileUploadingState: initialState,
		fileUploadingDispatcher: null
	});

export const FileUploadingContextProvider = ({children}: {children: React.ReactNode}) =>
{
	const [state, setState] = useState(initialState);
	return(
		<FileUploadingContext.Provider value={ {
			fileUploadingState: state,
			fileUploadingDispatcher: setState
		} }>
			{children}
		</FileUploadingContext.Provider>
	)
}