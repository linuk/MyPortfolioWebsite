import React, { Component } from 'react';
import {ProjectsCardsContainer} from './ProjectsCardsContainer'
import { Grid, Row, Col} from "react-bootstrap"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 


export class ProjectsContainer extends Component {
	render() {
		
		const backgroundURL='imgs/projectBG.png';

		const ProjectsContainerCSS={
			paddingTop: "100px",
			paddingBottom: "50px",
			background: 'url(' + backgroundURL + ') center center repeat',
			backgroundAttachment: 'fixed',
			height: "100%",
		}

		const GridCSS={
			minHeight: "100%",
			marginBottom : "50px",
		}

		const RowCSS={
			minHeight: "100%",
		}
	
		return (
			<div style={ProjectsContainerCSS} >
				<ReactCSSTransitionGroup
					transitionName="fadeInfadeOut"
					transitionAppear={true} transitionAppearTimeout={4000}
	  				transitionEnter={true}  transitionEnterTimeout={4000}
	  				transitionLeave={true} transitionLeaveTimeout={4000}>
					<Grid style={GridCSS}>
						<Row style={RowCSS}>
							<Col md={12} mdOffset={0}>
								<ProjectsCardsContainer />
							</Col>
						</Row>
					</Grid>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
