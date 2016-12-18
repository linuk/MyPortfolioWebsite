import React, { Component } from 'react';
import { Grid, Row, Col} from "react-bootstrap";


export class IndexCardContent extends Component {

	render() {

		const GridCSS={
			width: "100%",
		}

		return (
			<div style={this.props.style}   >
				<Grid style={GridCSS}>
					<Row>
						<h2>{this.props.content.title}</h2>
						<p>{this.props.content.text}</p>

					</Row>
				</Grid>
			</div>
		);

	}
}
