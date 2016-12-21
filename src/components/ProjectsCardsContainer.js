import React, { Component } from 'react';
import { Row, Col} from "react-bootstrap";
import { ProjectsCard } from './ProjectsCard';





export class ProjectsCardsContainer extends Component {

	render() {

		let content={
			shortDesctiption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
			description: "Vitae debitis mollitia tempora eos corporis accusantium optio consequuntur. Unde, quasi, quae numquam tempore sapiente quis facere, optio quo, expedita fugit minima?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae debitis mollitia tempora eos corporis accusantium optio consequuntur. Unde, quasi, quae numquam tempore sapiente quis facere, optio quo, expedita fugit minima?",

		}
		let tempLabels = [ "Javascript", "HTML", "C++"];
		let tempLabels2 = [ "Javascript", "HTML"];

		return (
			<div className={"fullHeight projectCardContainer"}>
			
					<h1 >Projects</h1>
					<h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio alias provident dignissimos. Explicabo sequi reprehenderit, nostrum beatae excepturi accusamus tenetur quis eum dolor non accusantium laudantium, dolore dolorem natus cum.</h5>

				<Row>
					<Col md={4}> <ProjectsCard title={ "1" } content={ content } labels={ tempLabels }/> </Col>  
					<Col md={4}> <ProjectsCard title={ "2" } content={ content } labels={ tempLabels2 }/> </Col>
					<Col md={4}> <ProjectsCard title={ "3" } content={ content } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "4" } content={ content } labels={ tempLabels2 }/> </Col>
					<Col md={4}> <ProjectsCard title={ "5" } content={ content } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "6" } content={ content } labels={ tempLabels2 }/> </Col>
					<Col md={4}> <ProjectsCard title={ "7" } content={ content } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "8" } content={ content } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "9" } content={ content } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "10" } content={ content } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "11" } content={ content } labels={ tempLabels }/> </Col>
					<Col md={4}> <ProjectsCard title={ "12" } content={ content } labels={ tempLabels }/> </Col>
				</Row>
			</div>

		);
	}
}
