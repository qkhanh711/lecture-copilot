interface PDFViewerProps{
	url: string,
}
export const PDFViewer = (props: PDFViewerProps) =>
{
	return (
		<iframe src={props.url} className={'h-full w-full'}>
		</iframe>
	)
}