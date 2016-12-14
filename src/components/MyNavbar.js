import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { IndexLink } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';

let NavbarCSS={
  marginBottom: "0"
}


export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar style={NavbarCSS}>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">JLin</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="about"><NavItem eventKey={1} href="#">About</NavItem></LinkContainer>
            <LinkContainer to="/projects"><NavItem eventKey={2} href="#">Projects</NavItem></LinkContainer>
            <LinkContainer to="/Photography"><NavItem eventKey={3} href="#">Photography</NavItem></LinkContainer>
            <LinkContainer to="/Contact"><NavItem eventKey={4} href="#">Contact</NavItem></LinkContainer>
            <NavItem eventKey={4} href="/about">about</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}