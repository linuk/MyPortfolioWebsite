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

		const welcomeMessageCSS={
			lineHeight: "55px"
		}

		return (
			<div style={PhotographyCardContainerCSS}>
				<Row><Col md={10} mdOffset={1}>
						<h1 className={"pageTitle"}>{ photography.title }</h1>
						<hr/>
						<h4 className={"pageDescription"}>{ photography.content }</h4>
				</Col></Row>

				<hr/>
				<Gallery photos={photography.photos}  />
				
				<Row><Col md={8} mdOffset={2}>
						<hr/>
						<h3 style={welcomeMessageCSS}>{ photography.welcomeMessage }</h3>
						<Button 
		            		className={"button buttonShadow"} 
		            		style={LinkButtonCSS}
		            		href={photography.blogLink}
		            		target="_blank">
		            			Nyo Photography
		        			</Button>
						<hr/>
				</Col></Row>

			</div>
		)
	}
}
