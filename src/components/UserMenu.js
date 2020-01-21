import React, { Component } from 'react';

export class UserMenu extends Component {

	render() {
		return (
			<ul className="user-menu tm-nav-ul">
				{/* eslint-disable-next-line */}
				<li className="tm-nav-li"><a href="index.html" className="tm-nav-link active">Home</a></li>
				<li className="tm-nav-li"><a href="about.html" className="tm-nav-link">About</a></li>
				<li className="tm-nav-li"><a href="contact.html" className="tm-nav-link">Contact</a></li>
			</ul>
		);
	}
}