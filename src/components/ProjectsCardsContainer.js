import React, { Component } from 'react'
import { Label} from "react-bootstrap"
import { ProjectsCards } from './ProjectsCards'
import projectsJSON from './projects.json'



export class ProjectsCardsContainer extends Component {

	constructor(props){
		super(props);
		this.state={
			projects: projectsJSON,
			filter: "All", 
		}
	}

	handleClickLabel(event){
		this.setFilter(event.target.innerHTML)
	}

	setFilter(label){
		this.setState({
			filter: label,
		});
	}

	componentWillMount() {
		// console.log(projectsJSON);
	}

	render() {


		const LabelContainerCSS={
			display: "inline",
			margin: "5px",
			cursor: "pointer",
		}

		return (
			<div className={"fullHeight projectCardContainer"}>
			
					<h1 >Projects</h1>
					<h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio alias provident dignissimos. Explicabo sequi reprehenderit, nostrum beatae excepturi accusamus tenetur quis eum dolor non accusantium laudantium, dolore dolorem natus cum.</h5>
					<hr/>
					
					<h4 style={LabelContainerCSS}> 
						<Label bsStyle={"info"} onClick={this.handleClickLabel.bind(this)} >All</Label> 
					</h4>

					<h4 style={LabelContainerCSS}> 
						<Label bsStyle={"info"} onClick={this.handleClickLabel.bind(this)} >HTML</Label> 
					</h4>

					<h4 style={LabelContainerCSS}> 
						<Label bsStyle={"info"} onClick={this.handleClickLabel.bind(this)} >Javascript</Label> 
					</h4>

					<h4 style={LabelContainerCSS}> 
						<Label bsStyle={"info"} onClick={this.handleClickLabel.bind(this)} >CSS</Label> 
					</h4>

					<h4 style={LabelContainerCSS}> 
						<Label bsStyle={"info"} onClick={this.handleClickLabel.bind(this)} >C++</Label> 
					</h4>

					<h4 style={LabelContainerCSS}> 
						<Label bsStyle={"info"} onClick={this.handleClickLabel.bind(this)} >Design</Label> 
					</h4>

					<hr/>
					
					<ProjectsCards 
					projects={this.state.projects}
					filter={this.state.filter}
					/>


			</div>

		);
	}
}
