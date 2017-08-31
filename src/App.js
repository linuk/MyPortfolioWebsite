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
  	this.googleAnalytisTrack()
    this.setState({
  		loaded: true,
  	})
  }
  
  googleAnalytisTrack(i,s,o,g,r,a,m) {
   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-105732182-1', 'auto');
  ga('send', 'pageview');
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
