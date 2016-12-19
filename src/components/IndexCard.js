import React, { Component } from 'react'
import { IndexCardContent } from './IndexCardContent'
import { Grid, Row, Col, Button} from "react-bootstrap";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 

export class IndexCard extends Component {
	
	constructor(props){
		super(props);
		this.state={
			width: "100%",
			zIndex: 1,
			cursor: "pointer",
			contentDisplay: false,
			float: this.props.content.side,
			iconDisplay: false,
			transform: "scale(1,1)", 
			background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),url(' + this.props.content.backgroundURL + ') center center no-repeat',
		}
	}

	handleMouseEnter(){
		this.setState({
			iconDisplay: true,
			transform: "scale(1.05,1.05)", 
		})
	}

	handleClick(){
		if(this.state.contentDisplay===false) this.open();

	}

	handleMouseLeave(){
		this.close();
		console.log("leave");
	}

	handleMouseOver(){
		if(this.state.contentDisplay===false){
			this.setState({
				iconDisplay: true,
			});
		}
	}

	open(){
		this.setState({
			iconDisplay: false,
			contentDisplay: true,
			width: "180%",
			zIndex: 200,
			transform: "scale(1.05,1.05)", 
		});
		console.log("open");

	}

	close(){
		this.setState({
			contentDisplay: false,
			width: "100%",
			zIndex: 1,
			iconDisplay: false,
			transform: "scale(1,1)", 
		});	
		console.log("close");
	}



	render(){
		let cursorStyle = this.state.contentDisplay? "default": "pointer"; 


		let IndexCardContainerCSS={
			height: "100%",
			position: "relative",
			transition: "all 500ms",
			float: this.state.float,
			width: this.state.width,
			zIndex: this.state.zIndex,
			cursor: cursorStyle,
			clipPath: this.props.content.polygonCSS,
			WebkitClipPath: this.props.content.polygonCSS,
			transform: this.state.transform,
			WebkitTransform: this.state.transform,
			background: this.state.background,
		};

		// icon align for each side
		let leftAlign = this.state.float==="left" ? "45%": "55%" ;

		let IndexCardContentCSS={
			position: "absolute",
			textAlign: "center",
		  	top: "50%",
		  	left: leftAlign,
		    transform:" translate(-50%,-50%)",
			color: '#fafafa',
			width: "70%",
		};

		let IndexCardContentIconCSS={
			position: "absolute",
		  	top: "50%",
		  	left: "50%",
		    transform:" translate(-50%,-50%)",
		    fontSize: "10em",
		    color: "rbga(255,255,255,0.1)",
		}


		let IndexCardContentTextCSS={
			boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
			padding: "20px",
			margin:  "10px",
			background: "rgba(255,255,255,0.9)",
			color: '#444',
			borderRadius: "15px",
		}

		let IndexCardContentCloseButtonCSS={
			background: "rgba(255,255,255,0.3)",
			border: "#fff 1px solid",
			color: "#fff",
		}

		let icon = this.state.iconDisplay ? <i style={IndexCardContentIconCSS} className={this.props.content.icon} aria-hidden="true"></i>:  null;
		let closeButton = this.state.contentDisplay ?  <Button style={IndexCardContentCloseButtonCSS} onClick={this.close.bind(this)}>X</Button>: null;		
		let text = this.state.contentDisplay ? <IndexCardContent content={this.props.content} style={IndexCardContentTextCSS} /> : null;
		
		return (

				<div style={IndexCardContainerCSS}
				onMouseEnter={this.handleMouseEnter.bind(this)} 
				onClick={this.handleClick.bind(this)} 
				onMouseLeave={this.handleMouseLeave.bind(this)} 
				onMouseOver={this.handleMouseOver.bind(this)} >
						<div style={IndexCardContentCSS} >
							<ReactCSSTransitionGroup
							transitionName="IndexCardContent"
							transitionLeave={true} transitionLeaveTimeout={500}
							transitionEnter={true} transitionEnterTimeout={500}
							transitionAppear={false} >	
									{icon}
									{text}
									{closeButton}
							</ReactCSSTransitionGroup>
						</div>
				</div>
		);
	}
}
						

