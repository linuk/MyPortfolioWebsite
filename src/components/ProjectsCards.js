import React, { Component } from 'react';
import { ProjectsCardContent } from './ProjectsCardContent'
import { Row, Col} from "react-bootstrap"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 



export class ProjectsCards extends Component {

				// <Col md={4}> <ProjectsCardContent title={ "12" } content={ content } labels={ tempLabels }/> </Col>


	constructor(props){
		super(props);
		this.state={
			projects: this.props.projects,
			filter: this.props.filter,
			filterProjects: [], 
		}
	}

	componentWillMount() {
		this.filterProjectsCard(this.props.filter,this.props.projects)
	}

	componentWillReceiveProps(nextProps, nextState) {
		if(nextProps.filter!==this.state.filter){
			this.setState({
				filter: nextProps.filter,
			})	
			this.filterProjectsCard(nextProps.filter,this.state.projects)
		}
	}

	filterProjectsCard(filter, projectsJSON){
		let filterProjects=[];

		// user choose specific filter
		projectsJSON.projects.forEach((element)=>{

			// change it to true if the project is what we want
			let approved = false; 

			// chaeck each types
			element.types.forEach((type)=>{
				if(type.toLowerCase()===filter.toLowerCase()||filter.toLowerCase() === "all"){
					approved = true; 
				}	
			})

			// push to projects array if thats what we want  
			if(approved){
				filterProjects.push(element);
			}
		});

 		this.setState({
 			filterProjects: filterProjects
 		});

		console.log("filter: ");
		console.log(filter);
		console.log("filterProject: ");
		console.log(filterProjects);

	}

	

	render() {

		const content={
			shortDesctiption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
			description: "Vitae debitis mollitia tempora eos corporis accusantium optio consequuntur. Unde, quasi, quae numquam tempore sapiente quis facere, optio quo, expedita fugit minima?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae debitis mollitia tempora eos corporis accusantium optio consequuntur. Unde, quasi, quae numquam tempore sapiente quis facere, optio quo, expedita fugit minima?",
		}

		const tempLabels = [ "HTML", "CSS", "Javascript" ];
		const tempLabels2 = [ "HTML", "Javascript", "jQuery"];
		const tempLabels3 = [ "C++"];

		return (
			<Row>
				<ReactCSSTransitionGroup
					transitionName="ProjectCard"
					transitionAppear={true} transitionAppearTimeout={500}
	  				transitionEnter={true}  transitionEnterTimeout={500}
	  				transitionLeave={true} transitionLeaveTimeout={500}>


				{
					this.state.filterProjects.map((project)=>
						<Col md={4} key={project.key} > 
							<ProjectsCardContent project={project}/>
						</Col>
					)
				}
				</ReactCSSTransitionGroup>

			</Row>
		);
	}
}
