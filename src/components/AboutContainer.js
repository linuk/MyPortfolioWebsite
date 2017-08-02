import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Grid, Row, Col} from "react-bootstrap"
import AboutCardContainer from './AboutCardContainer'

export class AboutContainer extends Component {

	render() {

		const AboutContainerCSS={
			paddingTop: "100px",
			paddingBottom : "50px",
		}


		return (
			<div style={AboutContainerCSS}>
				{/*<ReactCSSTransitionGroup*/}
						{/*transitionName="fadeInfadeOut"*/}
						{/*transitionAppear={true} transitionAppearTimeout={4000}*/}
          				{/*transitionEnter={true}  transitionEnterTimeout={4000}*/}
		  				{/*transitionLeave={true} transitionLeaveTimeout={4000}>*/}
					<Grid className={"fullHeight"}>
						<Row className={"fullHeight"}>
							<Col md={8} mdOffset={2} className={"fullHeight"}>
								<AboutCardContainer/>
							</Col>
						</Row>
					</Grid>
				{/*</ReactCSSTransitionGroup>*/}
			</div>
		);
	}
}
