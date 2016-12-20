import React, { Component } from 'react';
import ContactCardContent from './ContactCardContent'

export default class ContactCardContainer extends Component {
	render() {
		
		const ContactCardContainerCSS={
			background: "#fafafa",
			minHeight: "40vh",
			cursor: "default",
		}

		return (
			<div style={ContactCardContainerCSS} className={"card-2"}>
				<ContactCardContent/>
			</div>
		);
	}
}
