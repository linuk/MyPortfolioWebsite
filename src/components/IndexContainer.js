import React, { Component } from 'react';
import { Grid, Row, Col} from "react-bootstrap";
import { IndexCard } from './IndexCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
// import IndexJumbotron from './IndexJumbotron';
// import Color from './Color';
import colors from 'material-colors';



export class IndexContainer extends Component {

	render() {
	
		const GridCSS={
			width: "auto",
			height: "100%",
		}

		const RowCSS={
			height: "100%"
		}

		const IndexCardLeftContainerCSS={
			height: "100%",
			width: "55%",
			padding: 0,
			float: "left",
			position: "absolute",
			left: 0,
		}

		const IndexCardRightContainerCSS={
			height: "100%",
			width: "55%",
			padding: 0,
			float: "left",
			position: "absolute",
			right: 0,
		}


		const IndexCardContentLeft ={
			side: "left",
			title: "Corder",
			backgroundURL: 'imgs/indexCodeBG.jpg',
			polygonCSS: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)",
			icon: "fa fa-code fa-5x",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repellat quae, fuga quasi voluptatibus quibusdam perspiciatis eveniet temporibus numquam aliquid est porro commodi sint pariatur similique, et nostrum dolores expedita.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repellat quae, fuga quasi voluptatibus quibusdam perspiciatis eveniet temporibus numquam aliquid est porro commodi sint pariatur similique, et nostrum dolores expedita",
		}; 

		const IndexCardContentRight ={
			side: "right",
			title: "Photographer",
			backgroundURL: 'imgs/indexPhotographyBG.jpg',
			polygonCSS: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
			icon: "fa fa-camera-retro fa-5x",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repellat quae, fuga quasi voluptatibus quibusdam perspiciatis eveniet temporibus numquam aliquid est porro commodi sint pariatur similique, et nostrum dolores expedita.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repellat quae, fuga quasi voluptatibus quibusdam perspiciatis eveniet temporibus numquam aliquid est porro commodi sint pariatur similique, et nostrum dolores expedita",
		}

		return (
				<Grid style={GridCSS}>
					<Row style={RowCSS}>
					<ReactCSSTransitionGroup
					transitionName="fadeInfadeOut"
					transitionAppear={true} transitionAppearTimeout={1000}
	  				transitionEnter={true}  transitionEnterTimeout={1000}
	  				transitionLeave={true} transitionLeaveTimeout={1000}>
							<Col style={IndexCardLeftContainerCSS} > <IndexCard content={IndexCardContentLeft}/> </Col>
							<Col style={IndexCardRightContainerCSS} > <IndexCard content={IndexCardContentRight}/> </Col>
					</ReactCSSTransitionGroup>
					</Row>
				</Grid>
		);
	}
}
