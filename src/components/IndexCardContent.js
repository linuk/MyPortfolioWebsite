import React, { Component } from 'react';
import { Grid, Row, Button} from "react-bootstrap";
import { Link} from 'react-router'



export class IndexCardContent extends Component {

	render() {

		const GridCSS={
			width: "100%",
		}

		const buttonLink = this.props.content.buttonLink;


		return (
			

			<div style={this.props.style} >
				<Grid style={GridCSS}>
					<Row>
						<h1 style={{fontSize: "2em", marginTop: 0}}>{this.props.content.title}</h1>
						<p>{this.props.content.text}</p>
            			
            			<Link to={"/"+buttonLink}>
            				<Button className={"buttonShadow button"}>Read More</Button>
            			</Link>

					</Row>
				</Grid>
			</div>
		);

	}
}
