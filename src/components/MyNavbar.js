import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Image } from 'react-bootstrap';
import { IndexLink } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';

let NavbarCSS={
  marginBottom: "0",
  // boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  background: "#fefefe",
  minHeight: "50px",
}


export default class MyNavbar extends Component {

  constructor(props){
    super(props);
    this.state={
      navbarExpended: false,
    }
  }


  // scroll function reference: http://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery
  // scrollDuration in miliseconds
  scrollToTop(scrollDuration){
    const scrollHeight = window.scrollY,
          scrollStep = Math.PI / ( scrollDuration / 15 ),
          cosParameter = scrollHeight / 2;

    var scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
          if ( window.scrollY !== 0 ) {
              scrollCount++;  
              scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
              window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
          } 
          else clearInterval(scrollInterval); 
      }, 15 );
  }

  render() {

    const BrandLogoContainerCSS={
      paddingTop: "2px",
      paddingBottom: "2px",
      paddingLeft: "15px",
    }

    const iconCSS={
    }

    return (
      <Navbar 
      style={NavbarCSS} 
      className={"card-2"} 
      fluid={true} 
      collapseOnSelect={true} 
      fixedTop={true} >
        
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink style={BrandLogoContainerCSS} to="/">
              <Image src="imgs/logo/JLLogo.svg" style={{maxHeight: "100%"}} responsive/>
            </IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle>
            <span className="icon-bar" style={iconCSS}></span>
            <span className="icon-bar" style={iconCSS}></span>
            <span className="icon-bar" style={iconCSS}></span>
          </Navbar.Toggle>

        </Navbar.Header>
        
        <Navbar.Collapse>
          <Nav pullRight  >
            <LinkContainer to="/projects">
              <NavItem onSelect={this.scrollToTop(1000)} eventKey={1} href="#">Projects</NavItem>
            </LinkContainer>
            <LinkContainer to="/Photography">
              <NavItem onSelect={this.scrollToTop(1000)} eventKey={2} href="#">Photography</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem onSelect={this.scrollToTop(1000)} eventKey={3} href="#">About</NavItem>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <NavItem onSelect={this.scrollToTop(1000)} eventKey={4} href="#">Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }
}