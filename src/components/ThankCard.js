import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import { Grid, Row, Col} from "react-bootstrap"
import contactJSON from "./contact.json"

export class ThankCard extends Component {

	render() {
		
		const ThankCardContainerCSS={
			paddingTop: "100px",
    	}


    	const cardCSS={
			textAlign: "center",
			minHeight: "300px",
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			lineHeight: "4em"
    	}

		return (
			<div style={ThankCardContainerCSS}>
				<ReactCSSTransitionGroup
						transitionName="fadeInfadeOut"
						transitionAppear={true} transitionAppearTimeout={4000}
          				transitionEnter={true}  transitionEnterTimeout={4000}
		  				transitionLeave={true} transitionLeaveTimeout={4000}>
					<Grid className={"fullHeight"}>
						<Row className={"fullHeight"}>
							<Col md={8} mdOffset={2} className={"fullHeight"} >
 								<div style={cardCSS} className={"card-2 projectCardContainer"}>
									<i className={contactJSON.thankYouIcon} aria-hidden="true"></i>
									<h2>{contactJSON.thankYou1}</h2>
									<h4 style={{lineHeight: 1.3}}>{contactJSON.thankYou2}</h4>
								</div>
							</Col>
						</Row>
					</Grid>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
