"use client"
import React, {useEffect, useState} from "react";
import {ProgressBar} from "@/components/ui/progress-bar";

const testData = [
	{ bgColor: "#6a1b9a", completed: 60 },
	{ bgColor: "#00695c", completed: 30 },
	{ bgColor: "#ef6c00", completed: 53 },
];

function App() {
	const [completed, setCompleted] = useState(0);
	
	useEffect(() => {
		setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
	}, []);
	
	return (
		<div className="App">
			<ProgressBar bgColor={"#6a1b9a"} completed={completed} />
		</div>
	);
}

export default App;