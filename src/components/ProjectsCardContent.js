import React, { Component } from 'react';
import ProjectsCardModal  from './ProjectsCardModal'
import { ProjectsCardLabel } from './ProjectsCardLabel'



export class ProjectsCardContent extends Component {	
	
	openModal(){ this.refs.modal.open(); }

	render() {
		
		const ProjectsCardContentCSS={ 
			background: "#fff",
			color: "#222",
		}
		
		const backgroundURL = this.props.project.thumb;

		const ProjectCardContentContainer={
			background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(' + backgroundURL + ') center center no-repeat',
    		backgroundSize: "cover",
    		color: "#fff",
    		borderRadius: "5px",
		}


		return (
			<div style={ProjectsCardContentCSS} onClick={this.openModal.bind(this)} className={'projectCard projectCardShadow'}>
				<ProjectsCardModal ref="modal" project={this.props.project} />
				<div className={'projectCardContent'} style={ProjectCardContentContainer}>
					<h2 className={"projectCardTitle"}>{this.props.project.name}</h2>
					<p>{this.props.project.contents.shortDescription}</p>
					<ProjectsCardLabel types={this.props.project.types} />
				</div>
			</div>

		);
	}
}
