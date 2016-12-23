import React, { Component } from 'react'
import { Button} from "react-bootstrap"
import { ProjectsCards } from './ProjectsCards'
import projectsJSON from './projects.json'



export class ProjectsCardsContainer extends Component {

	constructor(props){
		super(props);
		this.state={
			projects: projectsJSON,
			filter: "all",
			labels: [], 
		}
	}

	componentWillMount(){
		this.setLabel(this.state.projects);
	}


	componentWillUpdate(){
	}


	setLabel(projectsJSON){
		let labels=[];
		this.state.projects.projects.forEach((project)=>{
			project.types.forEach((label)=>{
				if(!labels.includes(label)){
					labels.push(label);
				}
			});
		});
		this.setState({
			labels: labels,
		});
	}

	handleClickLabel(event){ 
		this.setFilter(event.target.innerHTML);
		this.toggleClass(event.target);
	}


	toggleClass(label){
		// if click the selected label button
		if(label.classList.contains("selected")){
			label.classList.remove("selected");
			this.setState({
				filter: "all",
			})
		}else{  // if click different label button
			if(document.getElementsByClassName("selected").length>0) {
				// remove selected label button selected class
				document.getElementsByClassName("selected")[0].classList.remove("selected");
			}
			label.classList.toggle("selected");
		}
	}

	setFilter(label){
		this.setState({
			filter: label,
		});
	}

	render() {

		const LabelContainerCSS={
			display: "inline-block",
			margin: "5px",
		}

		return (
			<div className={"fullHeight projectCardContainer"}>
			
					<h1 >Projects</h1>
					<h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio alias provident dignissimos. Explicabo sequi reprehenderit, nostrum beatae excepturi accusamus tenetur quis eum dolor non accusantium laudantium, dolore dolorem natus cum.</h5>
					<hr/>

					{
						this.state.labels.map((label)=>
							<div style={LabelContainerCSS} key={label}> 
								<Button 
								bsSize="xsmall" 
								className={label.toLowerCase()} 
								onClick={this.handleClickLabel.bind(this)}>
									{label}
								</Button> 
							</div>
						)
					}

					<hr/>
					
					<ProjectsCards 
					projects={this.state.projects}
					filter={this.state.filter}
					/>


			</div>

		);
	}
}
