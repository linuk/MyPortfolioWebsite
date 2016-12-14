import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div>
	    <MyNavbar />
	    {this.props.children}
      </div>
    );
  }
}
