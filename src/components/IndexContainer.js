import React, { Component } from 'react'
import { Grid, Row, Col, Button} from "react-bootstrap"
import { IndexCard } from './IndexCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import indexJSON from './index.json'



export class IndexContainer extends Component {

	constructor(props){
		super(props)
		this.state={
			leftIndex: 1,
			leftWidth: "55%",
			leftContentDisplay: false,

			rightIndex: 1,
			rightWidth: "55%",
			rightContentDisplay: false,
	
			iconDisplay: false,
			contents: indexJSON
		}
	}

	handleLeftClick(){
		if(this.state.rightContentDisplay) this.closeContent()
		if(!this.state.leftContentDisplay) this.openLeftContent()
	}

	handleRightClick(){
		if(this.state.leftContentDisplay) this.closeContent()
		if(!this.state.rightContentDisplay) this.openRightContent()
	}




	openLeftContent(){
		this.refs.leftIndexCard.open()
		this.setState({
			leftIndex: 100,
			leftWidth: "100%",
			iconDisplay: true,
			leftContentDisplay: true,
		})
	}

	openRightContent(){
		this.refs.rightIndexCard.open()
		this.setState({
			rightIndex: 100,
			rightWidth: "100%",
			iconDisplay: true,
			rightContentDisplay: true,
		})
	}

	closeContent(){
		this.setState({
			leftIndex: 1,
			leftWidth: "55%",
			rightIndex: 1,
			rightWidth: "55%",
			iconDisplay: false,
			leftContentDisplay: false,
			rightContentDisplay: false,
		})
		this.refs.leftIndexCard.close()
		this.refs.rightIndexCard.close()
	}



	render() {
	
		const index = this.state.contents.index

		const GridCSS={
			height: "100%",
			width: "auto",
		}

		const RowCSS={
			height: "100%",

		}


		const IndexCardContentLeft ={
			side: "left",
			title: index.left.title,
			text: index.left.content,
			icon: index.left.icon,
			buttonLink: index.left.link,
		}

		const IndexCardContentRight ={
			title: index.right.title,
			text: index.right.content,
			icon: index.right.icon,
			buttonLink: index.right.link,
		}

		const IndexCardLeftContainerCSS={
			height: "100%",
			width: this.state.leftWidth,
			padding: 0,
			float: "left",
			position: "absolute",
			left: 0,
			clipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)",
			WebkitClipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)",
			overflow: "hidden", 
			zIndex: this.state.leftIndex,
			transition: "all 500ms",
			background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),url(' + index.left.backgroundImage + ') center center no-repeat',
			backgroundSize: "cover",
		}

		const IndexCardRightContainerCSS={
			height: "100%",
			width: this.state.rightWidth,
			padding: 0,
			float: "left",
			position: "absolute",
			right: 0,
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
			WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
			overflow: "hidden",
			zIndex: this.state.rightIndex,
			transition: "all 500ms",
			background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),url(' + index.right.backgroundImage + ') center center no-repeat',
			backgroundSize: "cover",
		}

		const CloseButtonCSS={
			position: "absolute",
			marginTop: "50px",
			top: "10px",
			right: "10px",
			zIndex: 1000,
			background: 'transparent',
			color: "#fff",

		}

		const  closeButton = this.state.iconDisplay ?  <Button style={CloseButtonCSS} onClick={this.closeContent.bind(this)}>X</Button>: null


		return (
				<Grid style={GridCSS}>
					<Row style={RowCSS}>
					<ReactCSSTransitionGroup
					transitionName="fadeInfadeOut"
					transitionAppear={true} transitionAppearTimeout={1000}
	  				transitionEnter={true}  transitionEnterTimeout={1000}
	  				transitionLeave={true} transitionLeaveTimeout={1000}>
							
							{closeButton}
							
							<Col 
							style={IndexCardLeftContainerCSS} 
							onClick={this.handleLeftClick.bind(this)}>

							 	<IndexCard 
							 	content={IndexCardContentLeft} 
							 	contentDisplay={this.state.leftContentDisplay}
							 	ref="leftIndexCard"/> 
						 	
						 	</Col>
							
							<Col 
							style={IndexCardRightContainerCSS} 
							onClick={this.handleRightClick.bind(this)}>
								
								<IndexCard 
								content={IndexCardContentRight} 
								contentDisplay={this.state.rightContentDisplay}
								ref="rightIndexCard"/> 
							
							</Col>
					
					</ReactCSSTransitionGroup>
					</Row>
				</Grid>
		)
	}
}
