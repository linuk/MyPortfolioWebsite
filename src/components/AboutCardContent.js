import React, { Component } from 'react'
import { Button, Row, Col, Image } from "react-bootstrap"
import aboutJSON from './about.json'
import { Link} from 'react-router'

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
			// paddingTop: "50px",
			paddingBottom: "50px",
			textAlign: "center",
		}


		const profileContainerCSS={
			textAlign: "center",
			width: "100%",
		}

		const profileImageCSS={
			textAlign: "center",
			margin: "auto auto",
			maxWidth: "200px",
		}

		const pCSS={
			margin: "15px 0 15px 0",
			textAlign: "center",
		}

		const LinkButtonCSS={
			background: "#d040a0",
			color: "#fff",
		}

		const SkillsIconCSS={
			color: "#aaa",
			fontSize: "6em",
		}

		const gap=<div><hr/></div>

		return (
				<Row>
					<Col md={10} mdOffset={1} xs={10} xsOffset={1} >
						<div style={AboutCardContentContainerCSS}>
							<h1 className={"pageTitle"}>{ about.profile.title }</h1>
							<hr/>
							<br/>
							<Row><Col md={4} mdOffset={4} xs={8} xsOffset={2}>
								<div style={profileContainerCSS}>
									<Image style={profileImageCSS} src={about.profile.image}  circle  />
								</div>
							</Col></Row>
							
							<h2>{about.profile.name}</h2>
							<h4>{about.profile.address}</h4>
							<h4>{about.profile.content1}</h4>
							<h4>{about.profile.content2}</h4>
							
							{gap}
							
							<h2 className={"primaryBlackFont"}>{about.section1.title}</h2>
							<h5 style={pCSS}>{about.section1.content}</h5>
							<Row>
							{
								about.section1.list.map((advantage)=>
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

							<h2 className={"primaryBlackFont"} >{about.section2.title}</h2>
							<h4  className={"pageDescription"} style={pCSS}>{about.section2.content}</h4>
							
							<Row >
								{
									about.section2.list.map((skill, index)=>
										<Col md={3} xs={4} style={{padding: "5px"}} key={"skills"+index}> 
											<i style={SkillsIconCSS} className={skill} />
										</Col>	
									)
								}
							</Row>

							{gap}

							<h4 className={"pageDescription"} style={pCSS}>{about.final.content}</h4>
							<Link  to={"/contact"}>
								<Button 
			            		className={"button buttonShadow"} 
			            		style={LinkButtonCSS}
			            		href={"./contact"}>
			            			Contact Me
			        			</Button>
		        			</Link>
							{gap}

						</div>
					</Col>
				</Row>
		)
	}
}


