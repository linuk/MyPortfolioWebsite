var nodemailer = require('nodemailer');


//import nodemaile
// import nodemailer from 'nodemailer'

//declare email sending object
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'e.johnny.x@gmail.com',
        pass: 'nyotony0413'
    }
})

const options = {
    from: 'nyotony',
    to: 'nyotony@gmail.com', 
    subject: ' node.js test mail', // Subject line
    html: '<h2>Why and How</h2> <p>The <a href="http://en.wikipedia.org/wiki/Lorem_ipsum" title="Lorem ipsum - Wikipedia, the free encyclopedia">Lorem ipsum</a> text is typically composed of pseudo-Latin words. It is commonly used as placeholder text to examine or demonstrate the visual effects of various graphic design. Since the text itself is meaningless, the viewers are therefore able to focus on the overall layout without being attracted to the text.</p>'
    
}

import React, { Component } from 'react';

export class ContactSendMail extends Component {
	
	handleSendClick(){
		// sending mail function
		transporter.sendMail(options, function(error, info){
		    if(error){
		        console.log(error)
		    }else{
		        console.log('email sent: ' + info.response)
		    }
		})
	}


	render() {
		return (
			<div></div>
		);
	}
}
