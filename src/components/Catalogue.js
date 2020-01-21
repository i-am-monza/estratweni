import React, { Component } from 'react';
// Import images
import Image_01 from './../assets/img/gallery/01.jpg';
import Image_02 from './../assets/img/02.jpg';
import Image_03 from './../assets/img/03.jpg';
import Image_04 from './../assets/img/gallery/04.jpg';
import Image_05 from './../assets/img/gallery/05.jpg';
import Image_06 from './../assets/img/3.jpg';
import Image_07 from './../assets/img/gallery/07.jpg';
import Image_08 from './../assets/img/02.jpg';
import Catering from './../assets/img/catering.jpg';
import Hiring from './../assets/img/menu-image5.jpg';

export class Catalogue extends Component {

	constructor() {
		super();

		this.state = {data: []};
	}

	handleClick = () => {

	}

	render() {
		return (
			<div className="services container">
				<div className="row justify-content-center">
					<span className="w-100 mx-auto p-1 d-flex justify-content-center">
						<h4 id="forHeader">Catalogue</h4>
					</span>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-white">
						{/* eslint-disable-next-line */}
						<img src={Image_01} alt="Image-01" className="p-2 w-20 h-50"/>
						<h4 className="tm-gallery-title">Aliquam sagittis</h4>
						<p>
							A litle bit of description.
						</p>
						<p>
							The price of this product.
						</p>
						<p>
							Some additional information.
						</p>
						<button className="btn btn-outline-success text-dark lead">Add to cart.</button>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 pb-0 h-auto bg-white">
						{/* eslint-disable-next-line */}
						<img src={Image_02} alt="Image-01" className="p-2 w-20 h-50"/>
						<h4 className="tm-gallery-title">Aliquam sagittis</h4>
						<p>
							A litle bit of description.
						</p>
						<p>
							The price of this product.
						</p>
						<p>
							Some additional information.
						</p>
						<button className="btn btn-outline-success text-dark lead">Add to cart.</button>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-white">
						{/* eslint-disable-next-line */}
						<img src={Image_03} alt="Image-01" className="p-2 w-20 h-50"/>
						<h4 className="tm-gallery-title">Aliquam sagittis</h4>
						<p>
							A litle bit of description.
						</p>
						<p>
							The price of this product.
						</p>
						<p>
							Some additional information.
						</p>
						<button className="btn btn-outline-success text-dark lead">Add to cart.</button>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-white">
						{/* eslint-disable-next-line */}
						<img src={Image_04} alt="Image-01" className="p-2 w-20 h-50"/>
						<h4 className="tm-gallery-title">Aliquam sagittis</h4>
						<p>
							A litle bit of description.
						</p>
						<p>
							The price of this product.
						</p>
						<p>
							Some additional information.
						</p>
						<button className="btn btn-outline-success text-dark lead">Add to cart.</button>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-white">
						{/* eslint-disable-next-line */}
						<img src={Image_05} alt="Image-01" className="p-2 w-20 h-50"/>
						<h4 className="tm-gallery-title">Aliquam sagittis</h4>
						<p>
							A litle bit of description.
						</p>
						<p>
							The price of this product.
						</p>
						<p>
							Some additional information.
						</p>
						<button className="btn btn-outline-success text-dark lead">Add to cart.</button>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-white">
						{/* eslint-disable-next-line */}
						<img src={Image_06} alt="Image-01" className="p-2 w-20 h-50"/>
						<h4 className="tm-gallery-title">Aliquam sagittis</h4>
						<p>
							A litle bit of description.
						</p>
						<p>
							The price of this product.
						</p>
						<p>
							Some additional information.
						</p>
						<button className="btn btn-outline-success text-dark lead">Add to cart.</button>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-white">
						{/* eslint-disable-next-line */}
						<img src={Image_07} alt="Image-01" className="p-2 w-20 h-50"/>
						<h4 className="tm-gallery-title">Aliquam sagittis</h4>
						<p>
							A litle bit of description.
						</p>
						<p>
							The price of this product.
						</p>
						<p>
							Some additional information.
						</p>
						<button className="btn btn-outline-success text-dark lead">Add to cart.</button>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-white">
						{/* eslint-disable-next-line */}
						<img src={Image_08} alt="Image-01" className="p-2 w-20 h-50"/>
						<h4 className="tm-gallery-title">Aliquam sagittis</h4>
						<p>
							A litle bit of description.
						</p>
						<p>
							The price of this product.
						</p>
						<p>
							Some additional information.
						</p>
						<button className="btn btn-outline-success text-dark lead">Add to cart.</button>
					</article>
				</div>
				<div className="row justify-content-center">
					<div className="col-12">
						<div className="row services-action bg-light align-items-center pb-0 my-0">
							<div className="col">
								<div className="tm-feature px-3 py-1">
									<i className="fas fa-3x fa-home tm-feature-icon" style={{cursor: 'pointer'}} onClick={() => this.handleClick()}>Food</i>
								</div>
							</div>
							<div className="col">
								<div className="tm-feature px-3 py-1">
									<i className="fas fa-3x fa-map tm-feature-icon" style={{cursor: 'pointer'}} onClick={() => this.handleClick()}>Hire</i>
								</div>
							</div>
							<div className="col">
								<div className="tm-feature px-3 py-1">
									<i className="fas fa-3x fa-close tm-feature-icon" style={{cursor: 'pointer'}} onClick={() => this.handleClick()}>Cater</i>
								</div>
							</div>
							<div className="col">
								<div className="tm-feature px-3 py-1">
									<i className="fas fa-3x fa-refresh tm-feature-icon" style={{cursor: 'pointer'}} onClick={() => this.handleClick()}>Clothing</i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid row no-gutters bg-light px-2 mx-4">
					<div className="col-3">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={Image_03} alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
					<div className="col-3">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={Image_02} alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
					<div className="col-6">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={ Catering } alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
					<div className="col-4">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={ Hiring } alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
					<div className="col-3">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={Image_05} alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
					<div className="col-5">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={ Image_06 } alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
					<div className="col-3">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={Image_07} alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
					<div className="col-3">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={Image_08} alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
					<div className="col-3">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={Image_01} alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
					<div className="col-3">
						<article className=" bg-light">
							{/* eslint-disable-next-line */}
							<img src={Image_01} alt="Image-01" stryle={{width: '4rem', height: '2rem'}} className="img-fluid"/>
						</article>
					</div>
				</div>
			</div>
		);
	}
}