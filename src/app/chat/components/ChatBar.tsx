import {DocumentContextProps, DocumentsStateProps, MessageProperties} from "@/app/context/document-selection.context";
import Message from "@/app/chat/components/Message";
import { IoIosSend } from "react-icons/io";
import {useEffect, useRef} from "react";
interface ChatBarProps {
	state: DocumentsStateProps,
	sendMessageFunction: any
}
export default function ChatBar(props: ChatBarProps)
{
	const bottom = useRef();
	
	useEffect(() => {
		// 👇️ scroll to bottom every time messages change
		// @ts-ignore
		bottom.current?.scrollIntoView({behavior: 'smooth'});
	}, []);
	const {state, sendMessageFunction} = {...props};
	// @ts-ignore
	return(
		<div className={'h-full w-full mt-10'}>
			<div className={'h-[80vh] overflow-auto'}>
				{state.listFile[state.currentFile].history.toArray().map((message: MessageProperties, index: number) => {
					return (
						<Message key={index} {...message}/>
					)
				})
				}	
			</div>
			{/* eslint-disable-next-line react/no-string-refs */}
			<div></div>
			<div className={'flex top-[85vh] justify-center items-center'}>
				<textarea id={'message-text'} rows={2} className={'w-full block border-2 border-black pl-4 pt-2'} placeholder={'Type your message here'}/>
				<button onClick={async ()=>{ await sendMessageFunction()}} className={'text-4xl hover:text-blue-500'}><IoIosSend/></button>
			</div>
		</div>
	)
}