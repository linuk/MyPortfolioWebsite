import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import Loading from './components/Loading';



export default class App extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		loaded: false,
  	}
  }

  componentDidMount(){
  	console.log(this.state.loaded);
  	this.setState({
  		loaded: true,
  	})
  }
  
  render() {
	let AppCSS={
		height: "100vh",
    background: "#fafafa"
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
