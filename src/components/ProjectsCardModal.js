import React from 'react';
import { Modal, Button } from 'react-bootstrap'





const ProjectsCardModal  = React.createClass({	

	getInitialState() { return { showModal: false }; },
	close() { this.setState({ showModal: false }); },
  	open() { this.setState({ showModal: true }); },

	render() {
		
		const ModalContainerCSS={
			transform: "translate(0,20%)"
		}

		const ModalHeaderCSS={
			textAlign: "center"
		};

		const ModalBodyCSS={
			padding: "20px"
		}


		return (
			<div >
			<Modal style={ModalContainerCSS} bsSize="lg" open={this.open} show={this.state.showModal} onHide={this.close}>
      			
      			<Modal.Header style={ModalHeaderCSS} closeButton>
        	    	<Modal.Title>{this.props.title}</Modal.Title>
      	    	</Modal.Header>
          		
          		<Modal.Body style={ModalBodyCSS}>
		            <p>{this.props.content.description}</p>
		        </Modal.Body>
		        
		        <Modal.Footer>
            		<Button className={"button buttonShadow"}onClick={this.close}>Close</Button>
          		</Modal.Footer>
        	
        	</Modal>
        	</div>
		);
	}
})

module.exports = ProjectsCardModal;







