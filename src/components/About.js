import React, { Component } from 'react';
// Import images
import Space from './../assets/img/space.jpg';
import Blax from './../assets/img/blax.jpg';
import KitchenManager from './../assets/img/kitchen-manager.jpg';
import FloorDirector from './../assets/img/floor-director.jpg';
import Contact from './../assets/img/contact.jpg';

export class About extends Component {

	render() {
		return (
			<div id="top" className="about container">
				<header className="row tm-welcome-section">
					<h2 className="col-12 text-center tm-section-title">About Estratweni Mobile Foods</h2>
					<p className="col-12 text-center">Space and Blax co-founded Estratweni Mobile Foods in 2016. The duo started their business with R200 capital, which they borrowed from Space’s sister.
					<br/>
					<br/>
					The concept came after an idea to start a community development organisation became fraught with internal politics. The initial plan was to start something that will bring income while they worked on the long term organisation, which was to development and uplift the community...</p>
				</header>

				<div className="tm-container-inner tm-persons">
					<div className="row">
						<article className="col-lg-6">
							<figure className="tm-person">
								{/* eslint-disable-next-line */}
								<img src={Space} alt="Image" className="img-fluid tm-person-img" />
								<figcaption className="tm-person-description">
									<h4 className="tm-person-name">Thando "Space" Mavumengwana</h4>
									<p className="tm-person-title">Co-Founder</p>
									<p className="tm-person-about">"This section is reserved for the about information on Thando Space Mavumengwana."</p>
									<div>
										<a href="https://fb.com" className="tm-social-link"><i className="fab fa-facebook tm-social-icon"></i></a>
										<a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter tm-social-icon"></i></a>
										<a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram tm-social-icon"></i></a>
									</div>
								</figcaption>
							</figure>
						</article>
						<article className="col-lg-6">
							<figure className="tm-person">
								{/* eslint-disable-next-line */}
								<img src={Blax} alt="Image" className="img-fluid tm-person-img" />
								<figcaption className="tm-person-description">
									<h4 className="tm-person-name">Siphumeze "Blax" Ramncwana</h4>
									<p className="tm-person-title">Co-Founder</p>
									<p className="tm-person-about">"This section is reserved for the about information on Siphumeze Blax Ramncwana."</p>
									<div>
										<a href="https://fb.com" className="tm-social-link"><i className="fab fa-facebook tm-social-icon"></i></a>
										<a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter tm-social-icon"></i></a>
									</div>
								</figcaption>
							</figure>
						</article>
						<article className="col-lg-6">
							<figure className="tm-person">
								{/* eslint-disable-next-line */}
								<img src={KitchenManager} alt="Image" className="img-fluid tm-person-img" />
								<figcaption className="tm-person-description">
									<h4 className="tm-person-name">Florence Nelson</h4>
									<p className="tm-person-title">Kitchen Manager</p>
									<p className="tm-person-about">"This section is reserved for the about information on Florence Nelson."</p>
									<div>
										<a href="https://fb.com" className="tm-social-link"><i className="fab fa-facebook tm-social-icon"></i></a>
										<a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram tm-social-icon"></i></a>
									</div>
								</figcaption>
							</figure>
						</article>
						<article className="col-lg-6">
							<figure className="tm-person">
								{/* eslint-disable-next-line */}
								<img src={FloorDirector} alt="Image" className="img-fluid tm-person-img" />
								<figcaption className="tm-person-description">
									<h4 className="tm-person-name">Valentina Martin</h4>
									<p className="tm-person-title">Culinary Director</p>
									<p className="tm-person-about">"This section is reserved for the about information on Valentina Martin."</p>
									<div>
										<a href="https://fb.com" className="tm-social-link"><i className="fab fa-facebook tm-social-icon"></i></a>
										<a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter tm-social-icon"></i></a>
										<a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram tm-social-icon"></i></a>
										<a href="https://youtube.com" className="tm-social-link"><i className="fab fa-youtube tm-social-icon"></i></a>
									</div>
								</figcaption>
							</figure>
						</article>
					</div>
				</div>
				<div className="tm-container-inner tm-featured-image">
					<div className="row">
						<div className="col-12">
							<div className="placeholder-2">
								<div className="parallax-window-2" data-parallax="scroll"></div>		
							</div>
						</div>
					</div>
				</div>
				<div className="tm-container-inner tm-features">
					<div className="row">
						<div className="col-lg-4">
							<div className="tm-feature">
								<i className="fas fa-4x fa-pepper-hot tm-feature-icon">Food</i>
								<p className="tm-feature-description">This section is reserved for displaying additional, shortened details about the food side of business at Estratweni Mobile Foods.</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tm-feature">
								<i className="fas fa-4x fa-cocktail tm-feature-icon">Cater</i>
								<p className="tm-feature-description">This section is reserved for displaying additional, shortened details about the food side of business at Estratweni Mobile Foods.</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tm-feature">
								<i className="fas fa-4x fa-seedling tm-feature-icon">Hire</i>
								<p className="tm-feature-description">This section is reserved for displaying additional, shortened details about the food side of business at Estratweni Mobile Foods.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="tm-container-inner tm-history">
					<div className="row">
						<div className="col-12">
							<div className="tm-history-inner">
								{/* eslint-disable-next-line */}
								<img src={Contact} alt="Image" className="img-fluid tm-history-img d-flex align-self-top" />
								<div className="tm-history-text"> 
									<h4 className="tm-history-title">History of our restaurant</h4>
									<p className="tm-mb-p">
										The founders are Thando "Space" Mavumengwana and Siphumeze "Blax" Ramncwana.
									</p>
									<p>
										They started out working for an NGO in our community running after school programs, support groups and youth development groups that grew their passion for developing their community and wanting to become a solution to the problems that their community faces. In between their work they had to prepare snacks for the kids and at some point help in cooking for camps and that is where the desire of cooking came about. 
										<br/>
										They resigned from the NGO and started a small business from the R200 they borrowed from Spaces sister, from there they started to bake and sell muffins early in the morning from 5:30am.
									</p>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		);
	}
}