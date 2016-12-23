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
		this.setLabels();
	}

	setLabels(){
		
		let labelNumbers=this.props.types.length;

		for (let labelIndex=0; labelIndex<labelNumbers; labelIndex++){
			
			let labelName = this.props.types[labelIndex];
			
			// choose label class by label name
			this.state.labels.push( 
				<h5 key={labelName}  style={{display: "inline"}}>
					<Label style={{marginRight: "5px"}} className={labelName.toLowerCase()}> 
						{labelName} 
					</Label>
				</h5> )
		}		
	}

	render() {
		return ( <div> {this.state.labels} </div> );
	}
}
