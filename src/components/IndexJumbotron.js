import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

let backgroundImageURL= 'imgs/bg.jpg';
let IndexJumbotronCSS={
	background: 'url(' + backgroundImageURL + ')',
	backgroundSize: 'cover',
	color: "#fff",
	position: "relative",
	height: "80vh"
}

let IndexJumbotronContentCSS={
	position: "absolute",
  	top: "50%",
  	left: "50%",
    transform:" translate(-50%,-50%)"
}

export class IndexJumbotron extends Component {
	render() {
		return (
			<Jumbotron style={IndexJumbotronCSS}>
				<div style={IndexJumbotronContentCSS}>
					<h1>Hello, world!</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium praesentium exercitationem, aut numquam consequatur aspernatur assumenda libero voluptas voluptates, ratione quidem veniam doloremque pariatur consequuntur ad omnis inventore a!</p>
					<Button bsStyle="primary">Learn more</Button>
					
				</div>
			</Jumbotron>
		);
	}
}

