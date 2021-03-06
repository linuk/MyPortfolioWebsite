import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import { Grid, Row, Col} from "react-bootstrap"
import ContactCardContainer from './ContactCardContainer'

export class ContactContainer extends Component {

	render() {
		
		const ContactContainerCSS={
			paddingTop: "100px",
    	}

		return (
			<div style={ContactContainerCSS}>
				<ReactCSSTransitionGroup
						transitionName="fadeInfadeOut"
						transitionAppear={true} transitionAppearTimeout={4000}
          				transitionEnter={true}  transitionEnterTimeout={4000}
		  				transitionLeave={true} transitionLeaveTimeout={4000}>
					<Grid className={"fullHeight"}>
						<Row className={"fullHeight"}>
							<Col md={8} mdOffset={2} className={"fullHeight"} >
								<ContactCardContainer/>
							</Col>
						</Row>
					</Grid>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
