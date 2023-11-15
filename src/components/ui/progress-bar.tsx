interface ProgressBarProps {
	bgColor: string;
	completed: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
	const { bgColor, completed } = { ...props };
	const containerStyles = {
		height: 20,
		width: '100%',
		backgroundColor: "#e0e0de",
		borderRadius: 50,
		margin: 50
	}
	
	const fillerStyles = {
		height: '100%',
		width: `${completed}%`,
		backgroundColor: bgColor,
		borderRadius: 'inherit',
		transition: 'width 1s ease-in-out',
		// textAlign: 'right'
	}
	
	const labelStyles = {
		padding: 5,
		color: 'white',
		fontWeight: 'bold'
	}
	
	return (
		<div style={containerStyles}>
			<div style={fillerStyles}>
				<span style={labelStyles}>{`${completed}%`}</span>
			</div>
		</div>
	);
}
										
