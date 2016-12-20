import React, { Component } from 'react';
import PhotographyCard from './PhotographyCard'

export default class PhotographyCardContainer extends Component {
	render() {
		
		const PhotographyCardContainerCSS={
			background: "#fafafa",
			minHeight: "40vh",
			cursor: "default",
		}

		return (
			<div style={PhotographyCardContainerCSS} className={"card-2"}>
				<PhotographyCard/>
			</div>
		);
	}
}
