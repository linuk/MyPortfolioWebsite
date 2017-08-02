import React, { Component } from 'react';
import { Image, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import menuJSON from './menu.json';

export default class MyNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navbarExpended: false,
      menu: menuJSON,
    };
  }

  /***********************************************************************
   * Title: <scrollTop animation without jquery/source code>
   *    Author: Robbendebiene
   *    Date: 3/7/2016
   *    Code version: #
   * Availability: http://stackoverflow.com/questions/21474678/
   * ***********************************************************************/

  // scrollDuration in miliseconds
  scrollToTop(scrollDuration) {
    const scrollHeight = window.scrollY,
          scrollStep   = Math.PI / ( scrollDuration / 15 ),
          cosParameter = scrollHeight / 2;

    var scrollCount    = 0,
        scrollMargin,
        scrollInterval = setInterval(function() {
          if (window.scrollY !== 0) {
            scrollCount++;
            scrollMargin = cosParameter -
              cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, ( scrollHeight - scrollMargin ));
          }
          else clearInterval(scrollInterval);
        }, 15);
  }

  render() {

    const BrandLogoContainerCSS = {
      paddingTop: '2px',
      paddingBottom: '2px',
      paddingLeft: '15px',
    };

    const menu = this.state.menu;

    const NavbarCSS = {
      marginBottom: '0',
      background: '#fefefe',
      minHeight: '50px',
    };

    return (
      <Navbar
        style={NavbarCSS}
        className={'card-2'}
        fluid={true}
        collapseOnSelect={true}
        fixedTop={true}
        aria-label="navigation bar">

        <Navbar.Header>
          <Navbar.Brand>
            <Link style={BrandLogoContainerCSS} to="/">
              <Image src="imgs/logo/JLLogo.svg" style={{ maxHeight: '100%' }}
                     alt={'JL logo'} responsive/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle>
            <span className="sr-only">Toggle menu navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Navbar.Toggle>

        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            {
              menu.list.map((item) =>
                <NavItem
                  key={item.title}
                  onSelect={this.scrollToTop(1000)}
                  eventKey={item.key}
                  href="#"
                  aria-label={item.title}
                >
                  <Link to={item.link}>
                    {item.title}
                  </Link>
                </NavItem>,
              )
            }
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }
}