import React, { Component } from 'react';

export class Contact extends Component {

	render() {
		return (
			<div id="top" className="contact container bg-white">
				<header className="row tm-welcome-section">
					<h2 className="col-12 text-center tm-section-title">Contact Us</h2>
					<p className="col-12 text-center">Tell us a bit more about our services and help us emprove where possible. We love doing what we do for you, your comments/suggest are appreciated, please. Or find us on our <a href="#address">social media</a> platforms for faster responses. Thank you for your vist.</p>
				</header>

				<div className="tm-container-inner-2 tm-contact-section">
					<div className="row">
						<div className="col-md-6">
							<form action="" method="POST" className="tm-contact-form">
						        <div className="form-group">
						          <input type="text" name="name" className="messageInput form-control" placeholder="Name" />
						        </div>
						        
						        <div className="form-group">
						          <input type="email" name="email" className="messageInput form-control" placeholder="Email" />
						        </div>
					
						        <div className="form-group">
						          <textarea rows="5" name="message" className="messageInput form-control" placeholder="Message" ></textarea>
						        </div>
						
						        <div className="form-group tm-d-flex">
						          <button id="message" className="tm-btn tm-btn-success tm-btn-right">
						            Send
						          </button>
						        </div>
							</form>
						</div>
						<div className="col-md-6">
							<div id="address" className="tm-address-box">
								<h4 className="tm-info-title tm-text-success">Our Address</h4>
								<address>
									170 Steve Biko Drive
									<br/>
									Gugulethu
									<br/>
									7750
								</address>
								<a href="tel:080-090-0110" className="tm-contact-link">
									<i className="fas fa-phone tm-contact-icon"></i>076 336 8662
								</a>
								<a href="mailto:info@company.co" className="tm-contact-link">
									<i className="fas fa-envelope tm-contact-icon"></i>estratwenimobilefoods@gmail.com
								</a>
								<div className="tm-contact-social">
									{/* eslint-disable-next-line */}
									<a href="#" className="tm-social-link"><i className="fab fa-facebook tm-social-icon"></i></a>
									{/* eslint-disable-next-line */}
									<a href="#" className="tm-social-link"><i className="fab fa-twitter tm-social-icon"></i></a>
									{/* eslint-disable-next-line */}
									<a href="#" className="tm-social-link"><i className="fab fa-instagram tm-social-icon"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tm-container-inner-2 tm-map-section">
					<div className="row">
						<div className="col-12">
							<div className="tm-map">
								<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11196.961132529668!2d-43.38581128725845!3d-23.011063013218724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sth!4v1568649412152!5m2!1sen!2sth" frameBorder="0" allowFullScreen=""></iframe>
							</div>
						</div>
					</div>
				</div>
				<div className="tm-container-inner-2 tm-info-section">
					<div className="row">
						<div className="col-12 tm-faq">
							<h2 className="text-center tm-section-title">FAQ's</h2>
							<p className="text-center">Estratweni Mobile Foods is a fast food, catering and hiring business that started in 2016. With our experience in service, serving you, these are what people frequently wonder about our business...</p>
							<div className="tm-accordion">
								<button className="accordion">1. At what locations do you regulary open for business?</button>
								<div className="panel">
									<p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.</p>
								</div>
								
								<button className="accordion">2. Are you open and operational on weekends and/or public holidays?</button>
								<div className="panel">
									<p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat</p>
								</div>
								
								<button className="accordion">3. Do you cater/hire for private events like birthdays or stockvels?</button>
								<div className="panel">
								 	<p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat</p>
								</div>
								
								<button className="accordion">4. Is Space and Blax related as they are always togethr?</button>
								<div className="panel">
									<p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat</p>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		);
	}
}