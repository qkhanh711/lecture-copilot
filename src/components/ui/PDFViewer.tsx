interface PDFViewerProps{
	url: string,
}
export const PDFViewer = (props: PDFViewerProps) =>
{
	return (
		<iframe src={`https://docs.google.com/viewer?url=${props.url}&embedded=true`} className={'w-full h-full'}></iframe>
	
	// <iframe src={props.url}  className={'h-full w-full'}>
	// 	</iframe>
	)
}