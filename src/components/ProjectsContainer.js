import React, { Component } from 'react';
import {ProjectsCardsContainer} from './ProjectsCardsContainer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 


export class ProjectsContainer extends Component {
	render() {
		
		const backgroundURL='imgs/projectBG.png';

		const ProjectsContainerCSS={
			paddingTop: "100px",
			paddingBottom: "50px",
			background: 'url(' + backgroundURL + ') center center repeat',
			backgroundAttachment: 'fixed',
		}

	
		return (
			<div style={ProjectsContainerCSS}>
				<ReactCSSTransitionGroup
					transitionName="fadeInfadeOut"
					transitionAppear={true} transitionAppearTimeout={4000}
	  				transitionEnter={true}  transitionEnterTimeout={4000}
	  				transitionLeave={true} transitionLeaveTimeout={4000}>
					<ProjectsCardsContainer />
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
