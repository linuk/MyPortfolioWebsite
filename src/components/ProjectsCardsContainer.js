import React, { Component } from 'react'
import { Row, Col, Button} from "react-bootstrap"
import { ProjectsCards } from './ProjectsCards'
import projectsJSON from './projects.json'


export class ProjectsCardsContainer extends Component {

	constructor(props){
		super(props)
		this.state={
			projects: projectsJSON,
			filter: "all",
			labels: [], 
			// filters: [], // for setting multiple label filter
		}
	}

	componentWillMount(){
		this.setLabelButton(this.state.projects);
	}

	setLabelButton(projectsJSON){
		let labels=[];
		this.state.projects.projects.forEach((project)=>{
			project.types.forEach((label)=>{
				if(!labels.includes(label)){
					labels.push(label);
				}
			});
		});
		this.setState({
			labels: labels.sort(),
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


	// TODO: for setting mutiple label filters
	// setFilters(label){

	// 	let labels=this.state.filters;

	// 	// if the new selected label hasn't been selected yet.
	// 	if(!labels.includes(label)){
	// 		labels.push(label);
			
	// 	}else{
	// 	// if the new selected label has been selected, then remove it from the filters array.
	// 		let index = labels.indexOf(label);
	// 		labels.splice( index, 1 );
	// 	}

	// 	this.setState({
	// 			filters: labels,
	// 		});
	// 	console.log(this.state.filters)	
	// }



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
				<Row>
					<Col md={8} mdOffset={2}>
						<h1 className={"pageTitle"}>{this.state.projects.page.title}</h1>
						<h5>{this.state.projects.page.content}</h5>
						<hr/>
					</Col>
				</Row>

				{
					this.state.labels.map((label)=>
						// generate label buttons
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
