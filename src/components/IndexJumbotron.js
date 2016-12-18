import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

let backgroundImageURL= 'imgs/bg.jpg';
let IndexJumbotronCSS={
	background: 'url(' + backgroundImageURL + ') center center no-repeat',
	backgroundSize: 'cover',
	backgroundAttachment: 'fixed',
	color: "#fff",
	position: "relative",
	height: "85vh",
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
				</div>
			</Jumbotron>
		);
	}
}

