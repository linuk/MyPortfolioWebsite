import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import { Grid, Row, Col} from "react-bootstrap";
import Color from './Color';
// import Animation from './Animation.css'


export class AboutContainer extends Component {

	render() {
		
		const GridCSS={
			width: "auto"
		}

		return (
			<div>
				<ReactCSSTransitionGroup
						transitionName="example"
						transitionAppear={true} transitionAppearTimeout={4000}
          				transitionEnter={true}  transitionEnterTimeout={4000}
		  				transitionLeave={true} transitionLeaveTimeout={4000}>
					<Grid style={GridCSS}>
						<Row>
							<Col md={4} style={{background: Color.secondary3, height: "40vh"}}></Col>
							<Col md={4} style={{background: Color.secondary2, height: "40vh"}}></Col>
							<Col md={4} style={{background: Color.secondary1, height: "40vh"}}></Col>
						</Row>
					</Grid>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
