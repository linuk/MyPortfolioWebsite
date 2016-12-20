import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import { Grid, Row, Col} from "react-bootstrap"
import PhotographyCardContainer from './PhotographyCardContainer'

export class PhotographyContainer extends Component {

	render() {
		
		const GridCSS={
			width: "auto"
		}

		const PhotographyContainerCSS={
			paddingTop: "100px"
		}


		return (
			<div style={PhotographyContainerCSS}>
				<ReactCSSTransitionGroup
						transitionName="fadeInfadeOut"
						transitionAppear={true} transitionAppearTimeout={4000}
          				transitionEnter={true}  transitionEnterTimeout={4000}
		  				transitionLeave={true} transitionLeaveTimeout={4000}>
					<Grid style={GridCSS}>
						<Row>
							<Col md={8} mdOffset={2}>
								<PhotographyCardContainer/>
							</Col>
						</Row>
					</Grid>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}


