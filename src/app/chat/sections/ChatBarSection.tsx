"use client"
import {useContext} from "react";
import {DocumentSelectionContext, MessageRole} from "@/app/context/document-selection.context";
import ChatBar from "@/app/chat/components/ChatBar";

export default function ChatBarSection()
{
	const {documentSelectionState, documentSelectionDispatcher} = useContext(DocumentSelectionContext);
	
	const sendMessage = () => {
		const message = (document.getElementById('message-text') as HTMLTextAreaElement).value;
		if (message == "") return;
		let newDocumentSelectionState = {...documentSelectionState};
		newDocumentSelectionState.listFile[newDocumentSelectionState.currentFile].history.push(
			{
				role: MessageRole.USER,
				message: message,
				timestamp: new Date()
			}
		)
		documentSelectionDispatcher(newDocumentSelectionState);
		(document.getElementById('message-text') as HTMLTextAreaElement).value = "";
	}
	
	return(
		<div className={'w-full'}>
			<ChatBar state={ documentSelectionState } sendMessageFunction={sendMessage}/>
		</div>
	)
}