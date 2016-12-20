import React, { Component } from 'react';
import ProjectsCardModal  from './ProjectsCardModal'
import { ProjectsCardLabel } from './ProjectsCardLabel'

let ProjectsCardCSS = { background: "#fff", color: "#222" }


export class ProjectsCard extends Component {	
	
	openModal(){ this.refs.modal.open(); }

	render() {
		
		const backgroundURL = 'imgs/projects/ex.jpg'

		const ProjectCardContentContainer={
			background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(' + backgroundURL + ') center center no-repeat',
    		backgroundSize: "cover",
    		color: "#fff",
    		borderRadius: "5px",
		}


		return (
			<div style={ProjectsCardCSS} onClick={this.openModal.bind(this)} className={'projectCard projectCardShadow'}>
				<ProjectsCardModal ref="modal" content={this.props.content}  title={this.props.title} />
				<div className={'projectCardContent'} style={ProjectCardContentContainer}>
					<h2>{this.props.title}</h2>
					<p>{this.props.content.shortDesctiption}</p>
					<ProjectsCardLabel labels={this.props.labels} title={this.props.title} />
				</div>
			</div>

		);
	}
}
