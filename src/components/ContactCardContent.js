import React, { Component } from 'react'
import { Row, Col, Button, FormGroup, FormControl } from "react-bootstrap"
import contactJSON from "./contact.json"

export default class ContactCardContent extends Component {

	render() {

		const ContactCardContentContainerCSS={
			textAlign: "center",
			marginBottom: "20px",
		}

		const contactFormContainerCSS={
			padding: "1em"
		}

		const contactIconContainerCSS={
			padding: "15px"
		}

		// for adding server side in the future 
		const contactForm=(
			<div style={contactFormContainerCSS}>
				<FormGroup controlId="formControlsName">
			    	<FormControl 
			    	type="text" 
					placeholder="Name"
					style={{margin: "5px"}}
					aria-label="name"
			    	onChange={this.onChange} />
			    </FormGroup>

			    <FormGroup controlId="formControlsEmail">
			    	<FormControl 
			    	type="text" 
					placeholder="E-Mail"
					style={{margin: "5px"}}
					aria-label="e-mail"
			    	onChange={this.onChange} />
			    </FormGroup>

			    <FormGroup controlId="formControlsMessages">
			    	<FormControl 
			    	componentClass="textarea"
					style={{margin: "5px",height: "20vh",display: "inline", maxWidth: "100%"}}
					aria-label="messages"
			    	placeholder="Messages" />
			    </FormGroup>

			    <Button type="submit" onClick={this.handleSendClick} className={"buttonShadow button"}> Send </Button>
		    </div>)		


		return (
				<Row>
					<Col md={10} mdOffset={1} xs={10} xsOffset={1} >
						<div style={ContactCardContentContainerCSS}>
							<h1 className={"primaryBlackFont pageTitle"} >{contactJSON.title}</h1>
							<h3>{contactJSON.content}</h3>
							<hr/>
							{
								contactJSON.contacts.map((contact)=>
									<Col style={contactIconContainerCSS} key={contact.name} md={4} mdOffset={0} xs={12}>
										<div className={"contactLinkContainer"} >
											<span className="fa-stack fa-5x">
												<i className="fa fa-circle fa-stack-2x"></i>
												<i className={contact.icon}/>
											</span>
											<h4> {contact.content}</h4>
										</div>
									</Col>
								)
							}
							
							<Col md={12} mdOffset={0} xs={12}>
								<hr/>
									<h3>{contactJSON.formContent}</h3>
									{contactForm}	
								<hr/>
								<br/>
							</Col>
						</div>
					</Col>
				</Row>
		);
	}
}
