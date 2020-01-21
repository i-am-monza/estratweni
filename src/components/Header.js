
import React, { Component } from 'react';
// Import the Link component from the react-router-dom library
import { Link } from 'react-router-dom';
// Import images
import Logo from './../assets/img/emf-logo.png';
import Blax from './../assets/img/slide-02.jpg';

export class Header extends Component {

	/**@enum private object*/
	activeStyle_ = {display: 'none'};

	constructor(props) {
		super();

		this.state = {action: props.data, count: 0};
	}

	// componentDidUpdate(newProps,newState) {
	// 	console.log("Now here", this.state.action, this.props.data, newState, newProps)
	// 	if(this.state.action !== newProps.data) {
	// 		this.setState({action: this.props.data});
	// 	}
	// }

	login = e => {

		switch(e.target.innerHTML)
		{
			case 'Login':
			{
				let card = document.getElementsByClassName('card')[0];

				card.style.display = 'flex';

				break;
			}
			default: 
			{
				this.props.signout_user(this.state.action);

				break;
			}
		}
	}

	render() {
		return (
			<div className="header placeholder container-fluid">
				<div className="row tm-header-inner bg-light">
					<div className="col col-xs-12 col-sm-6 col-md-6 col-lg-6 d-flex align-items-center">
						{/* eslint-disable-next-line */}
						<img src={Logo} alt="Logo" className="tm-site-logo" /> 
						<div className="tm-site-text-box">
							<h1 className="tm-site-title">Estratweni Mobile Foods</h1>
							<h6 className="tm-site-description">Food | Catering | Hiring</h6>	
						</div>
					</div>
					<nav className="col tm-nav">
						<ul className="tm-nav-ul">
							<li className="tm-nav-li">
								<Link to="Home" className="tm-nav-link active">Home</Link>
							</li>
							<li className="tm-nav-li">
								<Link to="About" className="tm-nav-link">About</Link>
							</li>
							<li className="tm-nav-li">
								<Link to="Contact" className="tm-nav-link">Contact</Link>
							</li>
						</ul>
						<ul className="user-menu tm-nav-ul mt-1">
							<li className="tm-nav-li">
								<Link to="Catalogue" className="tm-nav-link">Catalogue</Link>
							</li>
							<li className="tm-nav-li">
								<Link to="Cart" className="tm-nav-link">Cart</Link>
							</li>
							<li className="tm-nav-li">
								<Link to="Account" className="tm-nav-link">Account</Link>
							</li>
							<li className="tm-nav-li">
								<Link to="Help" className="tm-nav-link">Help</Link>
							</li>
							<li className="tm-nav-li">
								<label className="tm-av-linkn">{this.state.action}</label>
							</li>
						</ul>
					</nav>
					<div className="col login-icon">
						<div className="w-auto">
							{/* eslint-disable-next-line */}
							<img src={Blax} alt="Logo" style={{width: '4rem', height: '4rem'}} className="tm-site-logo rounded-circle"/>
							<br/>
							<i className="fas fa-user pl-1" onClick={event => this.login(event)}>{(this.state.action !== "Login") ? this.state.action : "Login"}</i>
						</div>
					</div>
				</div>
				<div className="parallax-window">
				</div>
				<div className="row external-action pb-1">
					<div className="col-8">
						<div className="d-flex justify-content-around">
							{/* eslint-disable-next-line */}
							<a href="#" className="mx-2"><i className="fa fa-twitter">&nbsp;@estratwenimf</i></a>
							{/* eslint-disable-next-line */}
							<a href="#" className="mx-2"><i className="fa fa-instagram">&nbsp;@estratwenimf</i></a>
						</div>
						<div className="d-flex justify-content-around">
							{/* eslint-disable-next-line */}
							<a href="#" className="mx-2"><i className="fa fa-facebook">&nbsp;Estratweni Mobile Foods</i></a>
							{/* eslint-disable-next-line */}
							<a href="#" className="mx-2"><i className="fa fa-whatsapp">&nbsp;+277 6336 8662</i></a>
						</div>
					</div>
					<div className="col d-flex justify-content-center align-items-center">
						<strong className="text-capitalize lead">or find a location near you&nbsp;&nbsp;<i className="fa fa-search fa-2x" style={{cursor: "pointer"}}></i></strong>
					</div>
				</div>
			</div>
		);
	}
}