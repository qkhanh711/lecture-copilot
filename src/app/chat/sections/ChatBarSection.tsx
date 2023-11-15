"use client"
import {useContext} from "react";
import {DocumentSelectionContext} from "@/app/context/document-selection.context";
import ChatBar from "@/app/chat/components/ChatBar";

export default function ChatBarSection()
{
	const {state, dispatcher} = useContext(DocumentSelectionContext);
	return(
		<div className={'w-full'}>
			<ChatBar state={ state }/>
		</div>
	)
}