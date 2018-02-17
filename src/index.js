import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { IndexContainer } from './components/IndexContainer';
import { AboutContainer } from './components/AboutContainer';
import { ProjectsContainer } from './components/ProjectsContainer';
import { PhotographyContainer } from './components/PhotographyContainer';
import { ContactContainer } from './components/ContactContainer';
import { ThankCard } from './components/ThankCard';

ReactDOM.render((
  <Router basename="/">
    <App>
      <Route exact path="/" component={IndexContainer}/>
      <Route exact path="/about" component={AboutContainer}/>
      <Route exact path="/projects" component={ProjectsContainer}/>
      <Route exact path="/photography" component={PhotographyContainer}/>
      <Route exact path="/contact" component={ContactContainer}/>
      <Route exact path="/thankyou" component={ThankCard}/>
    </App>
  </Router>
), document.getElementById('root'));
