import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import { IndexContainer } from './components/IndexContainer'
import { AboutContainer } from './components/AboutContainer'
import { ProjectsContainer } from './components/ProjectsContainer'
import { PhotographyContainer } from './components/PhotographyContainer'
import { ContactContainer } from './components/ContactContainer'
import { ThankCard } from './components/ThankCard'

ReactDOM.render((
	<Router history={ browserHistory }>
		<Router path="/" component={ App } >
			<IndexRoute component={ IndexContainer } />
			<Router path="/about" component={ AboutContainer } />
			<Router path="/projects" component={ ProjectsContainer } />
			<Router path="/photography" component={ PhotographyContainer } />
			<Router path="/contact" component={ ContactContainer } />
			<Router path="/thankyou" component={ ThankCard } />
		</Router>
	</Router>
), document.getElementById('root'))

