import React, { Component } from 'react';
// Import images
import Catering from './../assets/img/catering.jpg';

export class Service_catering extends Component {

	render() {
		return (
			<div classNames="tm-section tm-container-inner">
				<div classNames="row">
					<div classNames="col-md-6">
						<figure classNames="tm-description-figure">
							{/* eslint-disable-next-line */}
							<img src={Catering} alt="Image" classNames="img-fluid" />
						</figure>
					</div>
					<div classNames="col-md-6">
						<div classNames="tm-description-box"> 
							<h4 classNames="tm-gallery-title">Catering</h4>
							<p classNames="tm-mb-45">This section is the description area for the catering service offered by Estratweni Mobile Foods. The section provides further information about the service provided, and means to contact Estratweni for contracting the services.</p>
							{/* eslint-disable-next-line */}
							<a href="contact.html" classNames="tm-btn tm-btn-default tm-right">Find out more?</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}