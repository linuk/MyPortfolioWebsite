import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyNavbar from './components/MyNavbar';
import {IndexJumbotron} from './components/IndexJumbotron';

export default class App extends Component {
  render() {
    return (
      <div className="App">
	    <MyNavbar />
	    <IndexJumbotron />
        <div className="App-header">
        </div>

      </div>
    );
  }
}
