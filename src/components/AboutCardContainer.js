import React, { Component } from 'react';
import AboutCardContent from './AboutCardContent'

export default class AboutCardContainer extends Component {
	render() {
		
		const AboutCardContainerCSS={
			background: "#fafafa",
			minHeight: "40vh",
			cursor: "default",
		}

		return (
			<div style={AboutCardContainerCSS} className={"card-2"}>
				<AboutCardContent/>
			</div>
		);
	}
}
