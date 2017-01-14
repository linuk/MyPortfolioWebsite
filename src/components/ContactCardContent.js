import React, { Component } from 'react'
import { Row, Col, Button, FormGroup, FormControl } from "react-bootstrap"
import contactJSON from "./contact.json"

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});



var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
    to: 'nyotony@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});



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
							<h1 className={"primaryBlackFont"}>{contactJSON.title}</h1>
							<hr/>
							<p>{contactJSON.content}</p>
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
