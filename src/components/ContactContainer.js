import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import { Grid, Row, Col} from "react-bootstrap"
import ContactCardContainer from './ContactCardContainer'

export class ContactContainer extends Component {

	render() {
		
		const backgroundURL='imgs/projectBG.png';
		
		const GridCSS={
			width: "auto"
		}

		const ContactContainerCSS={
			paddingBottom : "50px",
			paddingTop: "100px",
			background: 'url(' + backgroundURL + ') center center repeat',
			backgroundAttachment: "fixed"
		}

		return (
			<div style={ContactContainerCSS}>
				<ReactCSSTransitionGroup
						transitionName="fadeInfadeOut"
						transitionAppear={true} transitionAppearTimeout={4000}
          				transitionEnter={true}  transitionEnterTimeout={4000}
		  				transitionLeave={true} transitionLeaveTimeout={4000}>
					<Grid style={GridCSS}>
						<Row>
							<Col md={8} mdOffset={2}>
								<ContactCardContainer/>
							</Col>
						</Row>
					</Grid>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
