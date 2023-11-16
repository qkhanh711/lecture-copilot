"use client"
import {useContext} from "react";
import {DocumentSelectionContext, MessageRole} from "@/app/context/document-selection.context";
import ChatBar from "@/app/chat/components/ChatBar";

export default function ChatBarSection()
{
	const {documentSelectionState, documentSelectionDispatcher} = useContext(DocumentSelectionContext);
	
	const sendMessage = async () => {
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
		const response = await fetch('http://localhost:8000', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				url: documentSelectionState.listFile[documentSelectionState.currentFile].url,
				message: message
			})});
		console.log('url', documentSelectionState.listFile[documentSelectionState.currentFile].url)
		console.log('message', message)
		const data = await response.json();
		console.log('res',data.response)
		newDocumentSelectionState.listFile[newDocumentSelectionState.currentFile].history.push(
			{
				role: MessageRole.GPT,
				message: data.response,
				timestamp: new Date()
			})
		let finalState = {...newDocumentSelectionState};
		documentSelectionDispatcher(finalState);
	}
	
	return(
		<div className={'w-full'}>
			<ChatBar state={ documentSelectionState } sendMessageFunction={sendMessage}/>
		</div>
	)
}