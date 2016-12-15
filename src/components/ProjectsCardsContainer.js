import React, { Component } from 'react';
import { Grid, Row, Col} from "react-bootstrap";
import { ProjectsCard } from './ProjectsCard';


let tempTitle = "Title";
let tempText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
let tempLabels = [ "Javascript", "HTML", "C++"]
let tempLabels2 = [ "Javascript", "HTML"]


export class ProjectsCardsContainer extends Component {

	render() {
		return (
			<Grid>
				<Row>
					<Col md={4}> <ProjectsCard title={ "1" } text={ tempText } labels={ tempLabels }/> </Col>  
					<Col md={4}> <ProjectsCard title={ "2" } text={ tempText } labels={ tempLabels2 }/> </Col>
					<Col md={4}> <ProjectsCard title={ "3" } text={ tempText } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "4" } text={ tempText } labels={ tempLabels2 }/> </Col>
					<Col md={4}> <ProjectsCard title={ "5" } text={ tempText } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "6" } text={ tempText } labels={ tempLabels2 }/> </Col>
					<Col md={4}> <ProjectsCard title={ "7" } text={ tempText } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "8" } text={ tempText } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "9" } text={ tempText } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "9" } text={ tempText } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "10" } text={ tempText } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "11" } text={ tempText } labels={ tempLabels }/> </Col>
				</Row>
			</Grid>
		);
	}
}
