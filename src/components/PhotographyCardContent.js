import React, { Component } from 'react';

export default class PhotographyCardContainerCSS extends Component {
	render() {
		
		const PhotographyCardContainerCSS={
			background: "#fafafa",
			height: "40vh",
			cursor: "default",

		}

		return (
			<div style={PhotographyCardContainerCSS} >
				<h1 className={"cardContent"}>Photography</h1>
			</div>
		);
	}
}
