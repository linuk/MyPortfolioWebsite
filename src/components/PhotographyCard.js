import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import { Row, Col, Button } from "react-bootstrap"
import photographyJSON from "./photography.json"

export default class PhotographyCard extends Component {
	render() {

		const photography = photographyJSON

		const PhotographyCardContainerCSS={
			padding: "25px",
			textAlign: "center",
		}

		const LinkButtonCSS={
			background: "#dd0000",
			color: "#fff",
		}

		return (
			<div style={PhotographyCardContainerCSS}>
				<Row><Col md={8} mdOffset={2}>
						<h1 className={"pageTitle"}>{ photography.title }</h1>
						<h5>{ photography.content }</h5>
				</Col></Row>

				<hr/>
				<Gallery photos={photography.photos}  />
				
				<Row><Col md={8} mdOffset={2}>
						<h3 className={"pageTitle"}>{ photography.welcomeMessage }</h3>
						<Button 
		            		className={"button buttonShadow"} 
		            		onClick={this.close} 
		            		style={LinkButtonCSS}
		            		href={photography.blogLink}
		            		target="_blank">
		            			Nyo Photography
		        			</Button>
				</Col></Row>

			</div>
		)
	}
}
