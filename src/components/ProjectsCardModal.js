import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap'





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
			margin: "0px 0 20px 0",
		}

		const ModalBodyCSS={
			padding: "20px",
			textAlign: "center",
		}

		const pCSS={
			padding: "15px 0 0 0" ,
			textAlign: "left",
		}

		const GithubButtonCSS={
			background: "#800080",
			color: "#fff",
			marginRight: "15px",
		}

		const DemoButtonCSS={
			background: "#ffa500",
			color: "#fff",
		}

		return (
			<div >
			<Modal style={ModalContainerCSS} bsSize="lg" open={this.open} show={this.state.showModal} onHide={this.close}>
      			
          		
          		<Modal.Body style={ModalBodyCSS}>

        	    	<h3 style={ModalTitleCSS}>{this.props.project.name}</h3>
		           
		            <Carousel indicators={false}>
						{
							this.props.project.contents.imgs.map( (img, index)=>
								<Carousel.Item key={this.props.project.key + "_img_" + index }>
						  			<img width={900} height={500} alt="900x500" src={img}/>
								</Carousel.Item>								
							)	
						}

					</Carousel>

		            <p style={pCSS}>{this.props.project.contents.longDescription}</p>

					<hr/>
            		<Button 
            		className={"button buttonShadow"} 
            		onClick={this.close} 
            		style={GithubButtonCSS}
            		href ={this.props.project.contents.githubURL}>
            			Github
        			</Button>
        			<Button 
            		className={"button buttonShadow"} 
            		onClick={this.close} 
            		style={DemoButtonCSS}
            		href ={this.props.project.contents.liveDemo}>
            			Demo
        			</Button>
		        </Modal.Body>
        	
        	</Modal>
        	</div>
		);
	}
})

module.exports = ProjectsCardModal;







