import React, { Component } from 'react';
// Import images
import Image_01 from './../assets/img/gallery/01.jpg';
import Image_02 from './../assets/img/gallery/02.jpg';
import Image_03 from './../assets/img/gallery/03.jpg';
import Image_04 from './../assets/img/gallery/04.jpg';
import Image_05 from './../assets/img/gallery/05.jpg';
import Image_06 from './../assets/img/gallery/06.jpg';
import Image_07 from './../assets/img/gallery/07.jpg';
import Image_08 from './../assets/img/gallery/08.jpg';
import Catering from './../assets/img/catering.jpg';
import Hiring from './../assets/img/hiring.jpg';

export class Home extends Component {

	render() {
		return (
			<div id="top" className="home container bg-white">
				<header className="row tm-welcome-section">
					<h2 className="col-12 text-center tm-section-title">Welcome to Estratweni</h2>
					<p className="col-12 text-center">“WE WANT people from other places to come to Philippi to eat or buy our burgers. We know that once they taste them, they won’t stop buying."</p>
				</header>
				
				<div className="tm-paging-links">
					<nav>
						<ul>
							{/* eslint-disable-next-line */}
							<li className="tm-paging-item"><a href="#" className="tm-paging-link active">Burger</a></li>
							{/* eslint-disable-next-line */}
							<li className="tm-paging-item"><a href="#" className="tm-paging-link">Sausage</a></li>
							{/* eslint-disable-next-line */}
							<li className="tm-paging-item"><a href="#" className="tm-paging-link">Muffin</a></li>
						</ul>
					</nav>
				</div>
				{/* gallery 1 */}
				<div id="tm-gallery-page-burger" className="tm-gallery-page">
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_01} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Fusce dictum finibus</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R45 / R55</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_02} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Aliquam sagittis</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R65 / R70</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_03} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Sed varius turpis</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R30.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_04} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Aliquam sagittis</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R25.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_05} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Maecenas eget justo</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R80.25</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_06} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Quisque et felis eros</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R20 / R40 / R60</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_07} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Sed ultricies dui</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R94</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_08} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Donec porta consequat</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.ccumsan</p>
								<p className="tm-gallery-price">R15</p>
							</figcaption>
						</figure>
					</article>
				</div>
				{/* gallery 2 */}
				<div id="tm-gallery-page-sausage" className="tm-gallery-page hidden">
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_04} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Salad Menu One</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R25</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_03} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Second Title Salad</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R30</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_05} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Third Salad Item</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R45</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_01} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Superior Salad</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_08} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Sed ultricies dui</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R55 / R60</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_07} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Maecenas eget justo</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R75</p>
							</figcaption>
						</figure>
					</article>
				</div>
				{/* gallery 3 */}
				<div id="tm-gallery-page-muffin" className="tm-gallery-page hidden">
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_08} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Noodle One</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R12.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_07} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Noodle Second</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R15.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_06} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Third Soft Noodle</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R20.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_05} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Aliquam sagittis</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R30.25</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_04} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Maecenas eget justo</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R35.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							{/* eslint-disable-next-line */}
							<img src={Image_03} alt="Image" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Quisque et felis eros</h4>
								<p className="tm-gallery-description">This this the description section for the menu item. This section provides further details about the item, for the user.</p>
								<p className="tm-gallery-price">R40.50</p>
							</figcaption>
						</figure>
					</article>
				</div>
				<div id="catering" className="tm-section tm-container-inner">
					<div className="row">
						<div className="col-md-6">
							<figure className="tm-description-figure">
								{/* eslint-disable-next-line */}
								<img src={Catering} alt="Image" className="img-fluid" />
							</figure>
						</div>
						<div className="col-md-6">
							<div className="tm-description-box"> 
								<h4 className="tm-gallery-title">Catering</h4>
								<p className="tm-mb-45">This section is the description area for the catering service offered by Estratweni Mobile Foods. The section provides further information about the service provided, and means to contact Estratweni for contracting the services.</p>
								<a href="contact.html" className="tm-btn tm-btn-default tm-right">Find out more?</a>
							</div>
						</div>
					</div>
				</div>
				<div id="hiring" className="tm-section tm-container-inner">
					<div className="row">
						<div className="col-md-6">
							<div className="tm-description-box"> 
								<h4 className="tm-gallery-title">Hiring</h4>
								<p className="tm-mb-45">This section is the description area for the hiring service offered by Estratweni Mobile Foods. The section provides further information about the service provided, and means to contact Estratweni for contracting the services.</p>
								<a href="contact.html" className="tm-btn tm-btn-default tm-right">Find out more?</a>
							</div>
						</div>
						<div className="col-md-6">
							<figure className="tm-description-figure">
								{/* eslint-disable-next-line */}
								<img src={Hiring} alt="Image" className="img-fluid" />
							</figure>
						</div>
					</div>
				</div>
			</div>
		);
	}
}