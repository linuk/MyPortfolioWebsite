import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

export default class PhotographyCard extends Component {
	render() {

		const PHOTO_SET = [
		  {
		    src: 'imgs/photos/3.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 3,
		    lightboxImage:{
		    src: 'imgs/photos/3.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/2.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    src: 'imgs/photos/2.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/1.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    src: 'imgs/photos/1.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/4.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 4,
		    lightboxImage:{
		    src: 'imgs/photos/4.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/5.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1.5,
		    lightboxImage:{
		    src: 'imgs/photos/5.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/6.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 2,
		    lightboxImage:{
		    src: 'imgs/photos/6.jpg'
		    }
		  },
		  {
		    src: 'imgs/photos/7.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    src: 'imgs/photos/7.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/8.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 3,
		    lightboxImage:{
		    src: 'imgs/photos/8.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/9.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1.5,
		    lightboxImage:{
		    src: 'imgs/photos/9.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/10.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    src: 'imgs/photos/10.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/11.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 3,
		    lightboxImage:{
		    src: 'imgs/photos/11.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/12.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    src: 'imgs/photos/12.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/13.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 4,
		    lightboxImage:{
		    src: 'imgs/photos/13.jpg',
		    }
		  },
		];


		const PhotographyCardContainerCSS={
			padding: "15px",
		}



		return (
			<div style={PhotographyCardContainerCSS}>
				<h1 className={"cardContent"}>Photography</h1>
				<h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, quae ducimus illo earum commodi et ut nesciunt accusamus vero porro nemo cumque facilis, inventore sint cupiditate veritatis doloribus quibusdam autem?</h5>
				<hr/>
				<Gallery photos={PHOTO_SET}  />
			</div>
		);
	}
}
