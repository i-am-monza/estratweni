import React, { Component } from 'react';
// Import from react-router library
import { Link } from 'react-router-dom';

export class Footer extends Component {

	render() {
		return (
			<footer className="tm-footer text-center bg-white mt-0">
				<div>
					{/* eslint-disable-next-line */}
					<a href="#" target="_blank">
						<i className="fa fa-facebook"></i>
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" target="_blank">
						<i className="fa fa-twitter"></i>
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" target="_blank">
						<i className="fa fa-instagram"></i>
					</a>
					{/* eslint-disable-next-line */}
					<a rel="nofollow" href="#"><i className="fa">|</i></a>
					<Link to="About">
						{/* eslint-disable-next-line */}
						<i className="fa">About</i>
					</Link>
					<Link to="Contact">
					{/* eslint-disable-next-line */}
						<i className="fa">Contact</i>
					</Link>
				</div>
				<div>
					{/* eslint-disable-next-line */}
					<a href="#top">back top?</a>
				</div>
			</footer>
		);
	}
}