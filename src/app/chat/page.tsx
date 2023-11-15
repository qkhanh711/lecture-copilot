import DocumentSelector from "@/app/chat/components/DocumentSelector";
import PDFSection from "@/app/chat/sections/PDFSection";
import ChatBarSection from "@/app/chat/sections/ChatBarSection";
import DocumentSelectorSection from "@/app/chat/sections/DocumentSelectorSection";
	
export default async function Home()
{
	return (
		<div className={'grid grid-cols-[1fr,2fr,1fr] gap-4 pr-2 h-screen'}>
			{/*Left Side Bar to choose File*/}
			<DocumentSelectorSection/>
			
			{/*PDF Viewer*/}
			<PDFSection/>
			
			{/*Chat Bar*/}
			<div>
				<ChatBarSection/>
			</div>
		</div>
	)
}

