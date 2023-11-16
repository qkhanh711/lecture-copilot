import {MessageProperties, MessageRole} from "@/app/context/document-selection.context";

export default function Message(props: MessageProperties)
{
	const {role, message, timestamp} = {...props};
	return(
		<div className={`flex ${role === MessageRole.USER && "flex-row-reverse"} my-[4px]`}>
			<div className={`inline-flex rounded-[5px] px-4 py-2 ${role ===  MessageRole.USER ? "items-end bg-blue-500 text-white" : "bg-gray-300 text-black" }`}>
				{message}	
			</div>
		</div>
	)
}