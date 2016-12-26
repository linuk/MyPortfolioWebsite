import React from 'react';
import { Row, Col, Modal, Button, Carousel } from 'react-bootstrap'





const ProjectsCardModal  = React.createClass({	

	getInitialState() { return { showModal: false }; },
	close() { this.setState({ showModal: false }); },
  	open() { this.setState({ showModal: true }); },

	render() {
		
		const ModalContainerCSS={
			height: "100%",
		}

		const ModalTitleCSS={
			textAlign: "center",
			margin: "10px 0 10px 0",
		}

		const ModalBodyCSS={
			padding: "0px",
			textAlign: "center",
		}

		const ModalContentCSS={
			padding: "25px",
		}

		const pCSS={
			padding: "5px 0 0 0" ,
			textAlign: "left",
		}

		const GithubButtonCSS={
			background: "#800080",
			color: "#fff",
		}

		const DemoButtonCSS={
			background: "#ffa500",
			color: "#fff",
			marginLeft: "15px",
		}


		// generate demoButton if it has live demo link in JSON file
		let demoButton = this.props.project.contents.liveDemo ? 
				<Button 
        		className={"button buttonShadow"} 
        		onClick={this.close} 
        		style={DemoButtonCSS}
        		href={this.props.project.contents.liveDemo}>
        			Demo
    			</Button> : null;


		return (
			<div>
				<Modal style={ModalContainerCSS} 
				bsSize="lg" 
				open={this.open} 
				show={this.state.showModal} 
				onHide={this.close}>

					<Modal.Header closeButton />

	          		<Modal.Body style={ModalBodyCSS}>
			           
			            <Carousel indicators={false} controls={false} interval={4000}>

							{   
								// Generate project cards
								this.props.project.contents.imgs.map( (img, index)=>
									<Carousel.Item key={this.props.project.key + "_img_" + index }>
							  			<img width={900} height={500} alt="900x500" src={img}/>
									</Carousel.Item>								
								)	
							}

						</Carousel>

						<div style={ModalContentCSS}>
		        	    	<Row>
		        	    	<Col md={10} mdOffset={1}>
		        	    	<h3 style={ModalTitleCSS}>{this.props.project.name}</h3>
				            <p style={pCSS}>{this.props.project.contents.longDescription}</p>
							
							<hr/>
		            		<Button 
		            		className={"button buttonShadow"} 
		            		onClick={this.close} 
		            		style={GithubButtonCSS}
		            		href={this.props.project.contents.githubURL}>
		            			Github
		        			</Button>
		        				{demoButton}
		        	    	</Col>
		        	    	</Row>

						</div>

			        </Modal.Body>
	        	
	        	</Modal>
        	</div>
		);
	}
})

module.exports = ProjectsCardModal;







