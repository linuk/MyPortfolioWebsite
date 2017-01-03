import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import { Grid, Row, Col} from "react-bootstrap"
import PhotographyCardContainer from './PhotographyCardContainer'

export class PhotographyContainer extends Component {

	render() {
		
		const PhotographyContainerCSS={
			paddingTop: "100px",
		}

		const GridCSS={
			minHeight: "100%",
			marginBottom : "50px",
		}


		return (
			<div style={PhotographyContainerCSS}>
				<ReactCSSTransitionGroup
						transitionName="fadeInfadeOut"
						transitionAppear={true} transitionAppearTimeout={4000}
          				transitionEnter={true}  transitionEnterTimeout={4000}
		  				transitionLeave={true} transitionLeaveTimeout={4000}>
					<Grid style={GridCSS}>
						<Row className={"fullHeight"}>
							<Col md={12} mdOffset={0}>
								<PhotographyCardContainer/>
							</Col>
						</Row>
					</Grid>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}


