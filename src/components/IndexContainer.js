import React, { Component } from 'react';
import { Grid, Row, Col} from "react-bootstrap";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import IndexJumbotron from './IndexJumbotron';
import Color from './Color';

const GridCSS={
	width: "auto"
}

export class IndexContainer extends Component {
	render() {
		return (
			<div>
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionAppear={true} transitionAppearTimeout={4000}
	  				transitionEnter={false} 
	  				transitionLeave={true} transitionLeaveTimeout={4000}>
					<IndexJumbotron />
					<Grid style={GridCSS}>
						<Row>
							<Col md={4} style={{background: Color.primary, height: "40vh"}}>
							</Col>
							<Col md={4} style={{background: Color.secondary3, height: "40vh"}}>
							</Col>
							<Col md={4} style={{background: Color.secondary4, height: "40vh"}}>
							</Col>
						</Row>
					</Grid>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
