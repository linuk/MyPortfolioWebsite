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

  render() {

    const BrandLogoContainerCSS={
      paddingTop: "2px",
      paddingBottom: "2px",
      paddingLeft: "15px",
    }

    return (
      <Navbar style={NavbarCSS} className={"card-2"} fluid={true} collapseOnSelect={true} fixedTop={true}>
        
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink style={BrandLogoContainerCSS} to="/">
              <Image src="imgs/JLLogo.svg" style={{maxHeight: "100%"}} responsive/>
            </IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/projects"><NavItem eventKey={1} href="#">Projects</NavItem></LinkContainer>
            <LinkContainer to="/Photography"><NavItem eventKey={2} href="#">Photography</NavItem></LinkContainer>
            <LinkContainer to="/about"><NavItem eventKey={3} href="#">About</NavItem></LinkContainer>
            <LinkContainer to="/Contact"><NavItem eventKey={4} href="#">Contact</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }
}