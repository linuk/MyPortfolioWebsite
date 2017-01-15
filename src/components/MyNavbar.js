import React, { Component } from 'react'
import { Navbar, NavItem, Nav, Image } from 'react-bootstrap'
import { IndexLink } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import menuJSON from "./menu.json"

let NavbarCSS={
  marginBottom: "0",
  // boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  background: "#fefefe",
  minHeight: "50px",
}


export default class MyNavbar extends Component {

  constructor(props){
    super(props)
    this.state={
      navbarExpended: false,
      menu: menuJSON
    }
  }


  // scroll function reference: http://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery
  // scrollDuration in miliseconds
  scrollToTop(scrollDuration){
    const scrollHeight = window.scrollY,
          scrollStep = Math.PI / ( scrollDuration / 15 ),
          cosParameter = scrollHeight / 2

    var scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
          if ( window.scrollY !== 0 ) {
              scrollCount++  
              scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep )
              window.scrollTo( 0, ( scrollHeight - scrollMargin ) )
          } 
          else clearInterval(scrollInterval)
      }, 15 )
  }

  render() {

    const BrandLogoContainerCSS={
      paddingTop: "2px",
      paddingBottom: "2px",
      paddingLeft: "15px",
    }

    const menu = this.state.menu

    return (
      <Navbar 
      style={NavbarCSS} 
      className={"card-2"} 
      fluid={true} 
      collapseOnSelect={true} 
      fixedTop={true} 
      aria-label="navigation bar">
        
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink style={BrandLogoContainerCSS} to="/">
              <Image src="imgs/logo/JLLogo.svg" style={{maxHeight: "100%"}} alt={"JL logo"} responsive/>
            </IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle>
            <span className="sr-only">Toggle menu navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Navbar.Toggle>

        </Navbar.Header>
        
        <Navbar.Collapse>
          <Nav pullRight  >
            {
              menu.list.map((item)=>
              <LinkContainer key={item.title} to={item.link}>
                <NavItem 
                onSelect={this.scrollToTop(1000)} 
                eventKey={item.key} 
                href="#"
                aria-label={item.title}
                >
                {item.title}
                </NavItem>
              </LinkContainer>    

              )
            }
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }
}