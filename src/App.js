import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import IndexJumbotron from './components/IndexJumbotron';


let AppCSS={
	background: "#fafafa",
}

export default class App extends Component {
  render() {
    return (
      <div style={AppCSS}>
	    <MyNavbar />
	    {this.props.children}
      </div>
    );
  }
}
