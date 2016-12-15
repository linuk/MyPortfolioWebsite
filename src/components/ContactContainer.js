import React, { Component } from 'react';
import { Grid, Row, Col} from "react-bootstrap";
import Color from './Color';

const GridCSS={
	width: "auto"
}

export class ContactContainer extends Component {
	render() {
		return (
			<div>
				<Grid style={GridCSS}>
					<Row>
						<Col md={4} style={{background: Color.secondary3, height: "40vh"}}></Col>
						<Col md={4} style={{background: Color.primary, height: "40vh"}}></Col>
						<Col md={4} style={{background: Color.secondary2, height: "40vh"}}></Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
