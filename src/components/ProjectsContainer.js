import React, { Component } from 'react';
import {ProjectsCardsContainer} from './ProjectsCardsContainer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 


export class ProjectsContainer extends Component {
	render() {
		return (
			<div style={{paddingTop: "100px"}}>
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
