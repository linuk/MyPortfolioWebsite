import React, { Component } from 'react';
import { ProjectsCardContent } from './ProjectsCardContent'
import { Row, Col} from "react-bootstrap"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 



export class ProjectsCards extends Component {

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

	componentWillReceiveProps(nextProps) {
		
		if(nextProps.filter===this.state.filter){
			this.setState({ filter: "all" })	
		}else{
			// this.setState({filter: nextProps.filter })	
			console.log(nextProps.filter);
		}

		this.filterProjectsCard(nextProps.filter,this.state.projects)
	}

	filterProjectsCard(filter, projectsJSON){
		
		let filterProjects=[];
		// user choose specific filter
		projectsJSON.projects.forEach((element)=>{
			
			// change it to true if the project is what we want
			let approved = false; 
			
			// chaeck each types
			element.types.forEach((type)=>{
				if(type.toLowerCase()===filter.toLowerCase()||filter.toLowerCase() === "all"){ approved = true; }	
			})
			
			// push to projects array if thats what we want  
			if(approved){ filterProjects.push(element); }
		});

 		this.setState({ filterProjects: filterProjects });
	}



	render() {
		return (
			<Row>
				<ReactCSSTransitionGroup
				transitionName="ProjectCard"
				transitionAppear={false}
  				transitionEnter={true}  transitionEnterTimeout={1000}
  				transitionLeave={true} transitionLeaveTimeout={1000}>

				{
					this.state.filterProjects.map((project)=>
						// generate project card content
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
