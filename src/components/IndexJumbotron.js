import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

let backgroundImageURL= 'imgs/bg.jpg';
let IndexJumbotronCSS={
	background: 'url(' + backgroundImageURL + ') center center no-repeat',
	backgroundSize: 'cover',
	backgroundAttachment: 'fixed',
	color: "#fff",
	position: "relative",
	height: "80vh",
	marginBottom: "0"
}

let IndexJumbotronContentCSS={
	position: "absolute",
	textAlign: "center",
  	top: "50%",
  	left: "50%",
    transform:" translate(-50%,-50%)"
}

export default class IndexJumbotron extends Component {
	render() {
		return (
			<Jumbotron style={IndexJumbotronCSS}>
				<div style={IndexJumbotronContentCSS}>
					<h1>Index!</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium praesentium exercitationem!</p>
            		<LinkContainer to="/about"><Button bsStyle="primary">Learn more</Button></LinkContainer>
				</div>
			</Jumbotron>
		);
	}
}

