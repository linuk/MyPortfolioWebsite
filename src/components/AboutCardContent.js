import React, { Component } from 'react';
import { Row, Col, Image } from "react-bootstrap"

export default class AboutCardContent extends Component {

	render() {
		
		const profileImageURL="imgs/about/profile.jpg";
		const exampleImageURL="imgs/example.jpg";
		const exampleImage2URL="imgs/example2.jpg";
		const exampleImage3URL="imgs/example3.jpg";

		const AboutCardContentContainerCSS={
			paddingTop: "50px",
			paddingBottom: "50px",
		}

		const imgCSS={
			border: "15px",
		}

		const titleCSS={
			textAlign: "center",
		}

		const profileContainerCSS={
			textAlign: "center",
			width: "100%",
		}

		const profileImageCSS={
			textAlign: "center",
			margin: "auto auto",
			maxWidth: "150px",
		}

		const pCSS={
			margin: "15px 0 15px 0",
		}

		const SkillsIconCSS={
			color: "#aaa",
			fontSize: "6em",
		}

		const gap=<div><hr/></div>;

		return (
				<Row>
					<Col md={10} mdOffset={1} xs={10} xsOffset={1} >
						<div style={AboutCardContentContainerCSS}>
							<h1 style={titleCSS} className={"primaryBlackFont"}>About</h1>
							<hr/>
							
							<Row><Col md={4} mdOffset={4} xs={8} xsOffset={2}>
								<div style={profileContainerCSS}>
									<Image style={profileImageCSS} src={profileImageURL}  circle  />
								</div>
							</Col></Row>

							<h5 style={pCSS}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi,animi maxime pariatur minima architecto laudantium magnam libero atque nisi non, soluta quasi ut, cupiditate placeat enim quo.orem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi,animi maxime pa.</h5>
							
							{gap}
							
							<h2 className={"primaryBlackFont"} style={titleCSS} >Advantages</h2>
							<h5 style={pCSS}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi,animi maxime pariatur minima architecto laudantium magnam libero atque nisi non, soluta quasi ut, cupiditate placeat enim quo.</h5>
							<Row>
								<Col md={4} style={{paddingBottom: "20px"}}> 
									<div className={"aboutSkillsCard"}>
										<div className={"cardContent"}>
											<i className="fa fa-language fa-5x" aria-hidden="true"></i>
											<h3>Multilingual</h3>
											<h5 style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi, </h5>
										</div>
									</div>
								</Col>
								
								<Col md={4} style={{paddingBottom: "20px"}}> 
									<div className={"aboutSkillsCard"}>
										<div className={"cardContent"}>
											<i className="fa fa-star-o fa-5x" aria-hidden="true"></i>
											<h3>Aesthetic</h3>
											<h5 style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi, </h5>
										</div>
									</div>
								</Col>
								
								<Col md={4} style={{paddingBottom: "20px"}}> 
									<div className={"aboutSkillsCard"}>
										<div className={"cardContent"}>
											<i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
											<h3>UX</h3>
											<h5 style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi, </h5>
										</div>
									</div>
								</Col>
							</Row>

							{gap}

							<h2 className={"primaryBlackFont"} style={titleCSS} >Skills</h2>
							<h5 style={pCSS}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi,animi maxime pariatur minima architecto laudantium magnam libero atque nisi non, soluta quasi ut, cupiditate placeat enim quo.</h5>
							
							<Row style={{textAlign: "center"}}>
								<Col md={4} xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-html5-plain-wordmark" /> </Col>
								<Col md={4} xs={4} style={{padding: "5px"}}><i style={SkillsIconCSS} className="devicon-css3-plain-wordmark"></i></Col>
								<Col md={4} xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-bootstrap-plain-wordmark" /> </Col>
								<Col md={4} xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-react-original-wordmark" /> </Col>
								<Col md={4} xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-jquery-plain-wordmark" /> </Col>
								<Col md={4}  xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-python-plain-wordmark" /> </Col>
								<Col md={4}  xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-github-plain-wordmark" /> </Col>
								<Col md={4}  xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-heroku-plain-wordmark" /> </Col>
								<Col md={4} xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-git-plain" /> </Col>
								<Col md={4} xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-javascript-plain" /> </Col>
								<Col md={4}  xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-illustrator-plain" /> </Col>
								<Col md={4}  xs={4} style={{padding: "5px"}}> <i style={SkillsIconCSS} className="devicon-photoshop-plain" /> </Col>
							</Row>



							{gap}

							<h2 className={"primaryBlackFont"} style={titleCSS} >Experience</h2>
							<Row>
								<Col md={6}> <Image style={imgCSS} src={exampleImageURL} responsive /><br/></Col>
								<Col md={6}> <Image style={imgCSS} src={exampleImage2URL} responsive /> </Col>
								<Col md={12}> <Image style={imgCSS} src={exampleImage3URL} responsive /> </Col>
							</Row>

							<h5 style={pCSS}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi,animi maxime pariatur minima architecto laudantium magnam libero atque nisi non, soluta quasi ut, cupiditate placeat enim quo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facilis quae commodi, <br/>animi maxime pariatur minima architecto laudantium magnam libero atque nisi non, soluta quasi ut, cupiditate placeat enim quo.</h5>

							{gap}


						</div>
					</Col>
				</Row>
		);
	}
}


