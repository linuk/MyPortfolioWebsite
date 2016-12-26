import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import { Row, Col } from "react-bootstrap"

export default class PhotographyCard extends Component {
	render() {

		const PHOTO_SET = [
		  {
		    src: 'imgs/photos/thumbs/3_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 3,
		    lightboxImage:{
		    	src: 'imgs/photos/3.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/2_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    	src: 'imgs/photos/2.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/1_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    	src: 'imgs/photos/1.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/4_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 4,
		    lightboxImage:{
		    	src: 'imgs/photos/4.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/5_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1.5,
		    lightboxImage:{
		    	src: 'imgs/photos/5.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/6_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 2,
		    lightboxImage:{
		    	src: 'imgs/photos/6.jpg'
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/7_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    	src: 'imgs/photos/7.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/8_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 3,
		    lightboxImage:{
		    	src: 'imgs/photos/8.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/9_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1.5,
		    lightboxImage:{
		    	src: 'imgs/photos/9.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/10_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    	src: 'imgs/photos/10.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/11_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 3,
		    lightboxImage:{
		    	src: 'imgs/photos/11.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/12_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 1,
		    lightboxImage:{
		    	src: 'imgs/photos/12.jpg',
		    }
		  },
		  {
		    src: 'imgs/photos/thumbs/13_tn.jpg',
		    width: 1,
		    height: 1,
		    aspectRatio: 4,
		    lightboxImage:{
		    	src: 'imgs/photos/13.jpg',
		    }
		  },
		];


		const PhotographyCardContainerCSS={
			padding: "25px",
			textAlign: "center",
		}



		return (
			<div style={PhotographyCardContainerCSS}>
				<Row>
					<Col md={8} mdOffset={2}>
						<h1 className={"pageTitle"}>Photography</h1>
						<h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, quae ducimus illo earum commodi et ut nesciunt accusamus vero porro nemo cumque facilis, inventore sint cupiditate veritatis doloribus quibusdam autem?</h5>
					</Col>
				</Row>

				<hr/>
				<Gallery photos={PHOTO_SET}  />
			</div>
		);
	}
}
