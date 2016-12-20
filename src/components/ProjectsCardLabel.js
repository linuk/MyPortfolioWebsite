import React, { Component } from 'react';
import { Label } from 'react-bootstrap'
		

export class ProjectsCardLabel extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			labels: []
		};
	}	
	
	componentWillMount(){
		
		let labelNumbers=this.props.labels.length;

		for (let labelIndex=0; labelIndex<labelNumbers; labelIndex++){
			
			let labelName = this.props.labels[labelIndex];
			let labelClass = "info";
			
			// choose label class by label name
			switch(labelName){
				case "Javascript": labelClass = "success"; break;
				case "C++": labelClass = "warning"; break; 
				default: labelClass = "info"; break; 
			}
			
			this.state.labels.push( 
				<h5 key={labelName}  style={{display: "inline"}}>
					<Label style={{marginRight: "5px"}} bsStyle={labelClass}> 
						{labelName} 
					</Label>
				</h5> )
		}
	}

	render() {
		return ( <div> {this.state.labels} </div> );
	}
}
