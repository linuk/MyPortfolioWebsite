import React, { Component } from 'react';
import { Grid, Row, Col} from "react-bootstrap";

export default class Loading extends Component {
	
	render() {

		const LoadingContainterCSS={
			width: "100%",
			height: "100%",
			textAlign: "center",
			background: "#eaeaea"
		}

		const LoadingIconCSS={
			width: "auto",
			color: "#fff",
			fontSize: "8em",
			marginTop: "35vh",
		}

		return (
						<div style={LoadingContainterCSS}>
							<i style={LoadingIconCSS} className="fa fa-refresh fa-spin fa-fw"></i>
							<span className="sr-only">Loading...</span>	
						</div>

		);
	}
}
