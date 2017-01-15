import React, { Component } from 'react'
import MyNavbar from './components/MyNavbar'
import Loading from './components/Loading'



export default class App extends Component {
  constructor(props){
  	super(props)
  	this.state={
  		loaded: false,
  	}
  }

  componentDidMount(){
  	this.setState({
  		loaded: true,
  	})
  }
  
  render() {
	
  const backgroundURL='imgs/global/background.png'

  let AppCSS={
		minHeight: "100%",
    background: 'url(' + backgroundURL + ') center center repeat',
    backgroundAttachment: 'fixed',
	}

	let AppContentCSS={
		height: "100%",
	}

    if (this.state.loaded===true){
    	return (
			<div style={AppCSS}>
			    <MyNavbar />
			    <div style={AppContentCSS}>
			    	{this.props.children}
		    	</div>
			</div>
		)
    };

   	if(this.state.loaded===false){
   		return (
   			<div style={AppCSS}>
			    <Loading />
		    </div>
	    );
   	}

  }
};
