import React, { Component } from 'react';
// Import documents
import Doc from './../documents/help.pdf';

export class Help extends Component {

	render() {
		return (
			<div className="help container">
				<div className="row">
					<span className="col-xs-12 w-100 mx-auto p-1 d-flex justify-content-center">
						<h4 id="cartHeader">Help</h4>
					</span>
					<div className="col-xs-12 p-1 d-flex mx-auto justify-content-center">
						<iframe src={Doc} title="Help PDF" type="text/pdf" scrollable="true"></iframe>
					</div>
				</div>
			</div>
		);
	}
}