import React, { Component } from 'react';
import { Row, Col, Button, FormGroup, FormControl } from "react-bootstrap"

export default class ContactCardContent extends Component {

	render() {
		
		const ContactCardContentContainerCSS={
			textAlign: "center",
			marginBottom: "20px",

		}
		return (
				<Row>
					<Col md={10} mdOffset={1} xs={10} xsOffset={1} >
						<div style={ContactCardContentContainerCSS}>
							<h1 className={"primaryBlackFont"}>Contact</h1>
							<hr/>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi, <br/>animi maxime pariatur minima architecto laudantium magnam libero atque nisi non, soluta quasi ut, cupiditate placeat enim quo.</p>
							<hr/>

						    <FormGroup controlId="formControlsName">
						    	<FormControl 
						    	type="text" 
								placeholder="Name"
								style={{margin: "5px"}}
						    	onChange={this.onChange} />
						    </FormGroup>

						    <FormGroup controlId="formControlsEmail">
						    	<FormControl 
						    	type="text" 
								placeholder="E-Mail"
								style={{margin: "5px"}}
						    	onChange={this.onChange} />
						    </FormGroup>

						    <FormGroup controlId="formControlsMessages">
						    	<FormControl 
						    	componentClass="textarea"
								style={{margin: "5px",height: "20vh",display: "inline"}}
						    	placeholder="Messages" />
						    </FormGroup>

						    <Button type="submit"  className={"buttonShadow button"}> Send </Button>
						

						</div>
					</Col>
				</Row>
		);
	}
}
