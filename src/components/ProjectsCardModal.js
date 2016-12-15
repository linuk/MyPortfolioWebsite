import React from 'react';
import { Modal, Button } from 'react-bootstrap'


let ModalHeaderCSS={
	textAlign: "center"
}


const ProjectsCardModal  = React.createClass({	

	getInitialState() { return { showModal: false }; },
	close() { this.setState({ showModal: false }); },
  	open() { this.setState({ showModal: true }); },

	render() {
		return (
			<Modal bsSize="lg" open={this.open} show={this.state.showModal} onHide={this.close}>
      			
      			<Modal.Header style={ModalHeaderCSS} closeButton>
        	    	<Modal.Title>{this.props.title}</Modal.Title>
      	    	</Modal.Header>
          		
          		<Modal.Body>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae debitis mollitia tempora eos corporis accusantium optio consequuntur. Unde, quasi, quae numquam tempore sapiente quis facere, optio quo, expedita fugit minima?</p>
		        </Modal.Body>
		        
		        <Modal.Footer>
            		<Button onClick={this.close}>Close</Button>
          		</Modal.Footer>
        	
        	</Modal>
		);
	}
})

module.exports = ProjectsCardModal;







