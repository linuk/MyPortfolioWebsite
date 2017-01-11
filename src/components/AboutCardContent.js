import React, { Component } from 'react'
import { Row, Col, Image } from "react-bootstrap"
import aboutJSON from './about.json'

export default class AboutCardContent extends Component {

	constructor(props){
		super(props)
		this.state={
			about: aboutJSON
		}
	}

	render() {
		
		const about=this.state.about

		const AboutCardContentContainerCSS={
			paddingTop: "50px",
			paddingBottom: "50px",
		}

		const imgCSS={
			border: "15px",
		}

		const centerCSS={
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
			textAlign: "center",

		}

		const SkillsIconCSS={
			color: "#aaa",
			fontSize: "6em",
		}

		const skillIconClassName=[
			"devicon-html5-plain-wordmark",
			"devicon-css3-plain-wordmark",
			"devicon-bootstrap-plain-wordmark",
			"devicon-react-original-wordmark",
			"devicon-jquery-plain-wordmark",
			"devicon-python-plain-wordmark",
			"devicon-github-plain-wordmark",
			"devicon-heroku-plain-wordmark",
			"devicon-git-plain",
			"devicon-javascript-plain",
			"devicon-illustrator-plain",
			"devicon-photoshop-plain"
		]

		const gap=<div><hr/></div>

		return (
				<Row>
					<Col md={10} mdOffset={1} xs={10} xsOffset={1} >
						<div style={AboutCardContentContainerCSS}>
							
							<Row><Col md={4} mdOffset={4} xs={8} xsOffset={2}>
								<div style={profileContainerCSS}>
									<Image style={profileImageCSS} src={about.profile.image}  circle  />
								</div>
							</Col></Row>
							
							<h2 style={centerCSS}>{about.profile.name}</h2>
							<h5 style={centerCSS}>{about.profile.content}</h5>
							
							{gap}
							
							<h2 className={"primaryBlackFont"} style={centerCSS}>{about.advantages.title}</h2>
							<h5 style={pCSS}>{about.advantages.content}</h5>
							<Row>
							{
								about.advantages.list.map((advantage)=>
									<Col key={advantage.title} md={4} style={{paddingBottom: "20px"}}> 
										<div className={"aboutSkillsCard"}>
											<div className={"cardContent"}>
												<i className={advantage.iconClass} aria-hidden="true"></i>
												<h3>{advantage.title}</h3>
												<h5 style={pCSS}>{advantage.content}</h5>
											</div>
										</div>
									</Col>
								)
							}
							</Row>

							{gap}

							<h2 className={"primaryBlackFont"} style={centerCSS} >{about.skills.title}</h2>
							<h5 style={pCSS}>{about.skills.content}</h5>
							
							<Row style={centerCSS}>
								{
									about.skills.list.map((skill, index)=>
										<Col md={4} xs={4} style={{padding: "5px"}} key={"skills"+index}> 
											<i style={SkillsIconCSS} className={skill} />
										</Col>	
									)
								}
							</Row>

							{gap}

							<h5 style={pCSS}>{about.final.content}</h5>

							{gap}

						</div>
					</Col>
				</Row>
		)
	}
}


