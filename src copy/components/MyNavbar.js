import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">JLin</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Projects</NavItem>
            <NavItem eventKey={3} href="#">Photography</NavItem>
            <NavItem eventKey={4} href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}