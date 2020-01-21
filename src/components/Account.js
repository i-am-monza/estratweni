import React, { Component } from 'react';
// Import images 
import User from './../assets/img/slide-02.jpg';

export class Account extends Component {

	render() {

		return (
			<div className="account container">
				<div className="row">	
					<span className="col-12 w-100 mx-auto p-1 d-flex justify-content-center">
						<h4 id="accountHeader">Account</h4>
					</span>
					<div className="col-xs-12 col-sm-8 col-md-4 mx-auto">
						<div className="row">
							<span className="col-12 w-100 mx-auto p-1 d-flex justify-content-center">
								<h4>About User:<strong className="ml-2"><i className="fas fa-edit" style={{cursor: "pointer"}}></i></strong></h4>
							</span>
							<div className="col-3 details-labels">
								<h6 className="py-2">Name:</h6>
								<h6 className="py-2">Email:</h6>
								<h6 className="py-2">Mobile:</h6>
								<h6 className="py-2">Street:</h6>
							</div>
							<div className="col-8 details-values">
								<h6 className="py-2"><strong>Monwabisi Dingane</strong></h6>
								<h6 className="py-2"><strong>monwabisidingane@gmail.com</strong></h6>
								<h6 className="py-2"><strong>+278 4280 7666</strong></h6>
								<h6 className="py-2"><strong>892 Buhlungu St.</strong></h6>
								<h6 className="py-2"><strong>Philippi</strong></h6>
								<h6 className="py-2"><strong>7750</strong></h6>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-8 col-md-4 mx-auto">
						{/* eslint-disable-next-line */}
						<img src={User} alt="user" className="img-thumbnail d-flex mx-auto align-self-center btn btn-outline-secondary"/>
					</div>
					<div className="col-xs-12 col-sm-8 col-md-4 mx-auto">
						<div className="row">
							<span className="col-12 w-100 mx-auto p-1 d-flex justify-content-center">
								<h4>Recent Purchases:</h4>
							</span>
							<div>
								<table className="table">
									<tr>
										<td><h6 className="display-1">Purchase #013:</h6></td>
										<td><h6 className="display-1">19-Jan-2020</h6></td>
										{/* eslint-disable-next-line */}
										<td><a href="#"><h6 className="display-1"><strong>view</strong></h6></a></td>
										<td><h6 className="display-1"><strong><i className="fas fa-close pl-1" style={{cursor: "pointer"}}></i></strong></h6></td>
									</tr>
									<tr>
										<td><h6 className="display-1">Purchase #023:</h6></td>
										<td><h6 className="display-1">12-Jan-2020</h6></td>
										{/* eslint-disable-next-line */}
										<td><a href="#"><h6 className="display-1"><strong>view</strong></h6></a></td>
										<td><h6 className="display-1"><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
									</tr>
									<tr>
										<td><h6 className="display-1">Purchase #024:</h6></td>
										<td><h6 className="display-1">01-Jan-2020</h6></td>
										{/* eslint-disable-next-line */}
										<td><a href="#"><h6 className="display-1"><strong>view</strong></h6></a></td>
										<td><h6 className="display-1"><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-8 mx-auto">
						<span className="line"></span>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-8 col-md-4 mx-auto">
						<span className="col-12 w-100 mx-auto p-1 d-flex justify-content-center">
							<h4>still to-do</h4>
						</span>
						<div>
							<table className="table">
								<tr>
									<td><h6 className="display-1">Buy gqom tickets on sale</h6></td>
									<td><h6 className="display-1">2d ago</h6></td>
									<td><h6 className="display-1"><strong><i className="fas fa-close pl-1" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr>
									<td><h6 className="display-1">Enqiure about menu catalogue</h6></td>
									<td><h6 className="display-1">3w ago</h6></td>
									<td><h6 className="display-1"><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr>
									<td><h6 className="display-1">Go to event</h6></td>
									<td><h6 className="display-1">3w ago</h6></td>
									<td><h6 className="display-1"><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr className="d-flex justify-content-start">
									<td className="w-auto">
										{/* eslint-disable-next-line */}
										<a href="">more</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div className="col-xs-12 col-sm-8 col-md-4 mx-auto">
						<span className="col-12 w-100 mx-auto p-1 d-flex justify-content-center">
							<h4>news feeds</h4>
						</span>
						<div>
							<table className="table">
								<tr>
									<td><h6 className="display-1">Early bird tickets available till...:</h6></td>
										{/* eslint-disable-next-line */}
									<td><a href="#">more</a></td>
								</tr>
								<tr>
									<td><h6 className="display-1">Restuarant closed due to staff training...:</h6></td>
										{/* eslint-disable-next-line */}
									<td><a href="#">more</a></td>
								</tr>
								<tr>
									<td><h6 className="display-1">Join our Clean Our Streets innitiative...</h6></td>
										{/* eslint-disable-next-line */}
									<td><a href="#">more</a></td>
								</tr>
								<tr className="d-flex justify-content-start">
									<td className="w-auto">
										{/* eslint-disable-next-line */}
										<a href="">more</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div className="col-xs-12 col-sm-8 col-md-4 mx-auto">
						<span className="col-12 w-100 mx-auto p-1 d-flex justify-content-center">
							<h4>still in cart</h4>
						</span>
						<div>
							<table className="table">
								<tr>
									<td><h6 className="display-1">Purchase #034:</h6></td>
									<td><h6 className="display-1">14-Jan-2020</h6></td>
										{/* eslint-disable-next-line */}
									<td><a href="#"><h6 className="display-1"><strong>view</strong></h6></a></td>
									<td><h6 className="display-1"><strong><i className="fas fa-close pl-1" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr>
									<td><h6 className="display-1">Purchase #062:</h6></td>
									<td><h6 className="display-1">19-Jan-2020</h6></td>
										{/* eslint-disable-next-line */}
									<td><a href="#"><h6 className="display-1"><strong>view</strong></h6></a></td>
									<td><h6 className="display-1"><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr>
									<td><h6 className="display-1">Purchase #018:</h6></td>
									<td><h6 className="display-1">08-Jan-2020</h6></td>
										{/* eslint-disable-next-line */}
									<td><a href="#"><h6 className="display-1"><strong>view</strong></h6></a></td>
									<td><h6 className="display-1"><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr className="d-flex justify-content-start">
									<td className="w-auto">
										{/* eslint-disable-next-line */}
										<a href="">more</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-8 mx-auto">
						<span className="line-2"></span>
					</div>
				</div>
			</div>
		);
	}
}