import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { IndexLink } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';

let NavbarCSS={
  marginBottom: "0",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  background: "#fefefe"
}


export default class MyNavbar extends Component {

  closeNavbar(){

  }

  render() {
    return (
      <Navbar style={NavbarCSS} fluid={true} collapseOnSelect={true} >
        
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">J L</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="about"><NavItem eventKey={1} href="#">About</NavItem></LinkContainer>
            <LinkContainer to="/projects"><NavItem eventKey={2} href="#">Projects</NavItem></LinkContainer>
            <LinkContainer to="/Photography"><NavItem eventKey={3} href="#">Photography</NavItem></LinkContainer>
            <LinkContainer to="/Contact"><NavItem eventKey={4} href="#">Contact</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }
}