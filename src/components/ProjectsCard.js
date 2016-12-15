import React, { Component } from 'react';
import ProjectsCardModal  from './ProjectsCardModal'
import {ProjectsCardLabel} from './ProjectsCardLabel'
import color from 'material-colors'

let ProjectsCardCSS = { background: "#fff", color: "#222" }


export class ProjectsCard extends Component {	
	
	constructor(props) {
		super(props);
		this.state = {
			backgroundColor: "#fff"
		};
	}

	openModal(){ this.refs.modal.open(); }

	render() {
		return (
			<div style={ProjectsCardCSS} onClick={this.openModal.bind(this)} className={'card card-1'}>
				<ProjectsCardModal ref="modal" title={this.props.title} />
				<div className={'cardContent'}>
					<h2>{this.props.title}</h2>
					<p>{this.props.text}</p>
					<ProjectsCardLabel labels={this.props.labels} title={this.props.title} />
				</div>
			</div>

		);
	}
}
