import React, { Component } from 'react';
// Import images
import Image_01 from './../assets/img/gallery/01.jpg';
import Image_02 from './../assets/img/gallery/02.jpg';
import Image_03 from './../assets/img/gallery/03.jpg';
import Image_04 from './../assets/img/gallery/04.jpg';

export class Cart extends Component {

	render() {
		return (
			<div className="cart container">
				<div className="row">
					<span className="w-100 mx-auto p-1 d-flex justify-content-center">
						<h4 id="cartHeader">Cart</h4>
					</span>
					<div className="col-6">
						<span className="w-100 mx-auto p-1 d-flex justify-content-center">
							<h3 className="lead">To-Do</h3>
						</span>
						<div className="todo-controls d-flex justify-content-center">
							<input className="mx-1 px-4 w-100" placeholder="Enter here..." />
							<button className="mx-1">Add</button>
						</div>
						<div className="todo-stage">
							<table className="table">
								<tr>
									<td><h6 className="">Buy gqom tickets on sale</h6></td>
									<td><h6 className="">2d ago</h6></td>
									<td><h6 className=""><strong><i className="fas fa-close pl-1" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr>
									<td><h6 className="">Enqiure about menu catalogue</h6></td>
									<td><h6 className="">3w ago</h6></td>
									<td><h6 className=""><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr>
									<td><h6 className="">Go to event</h6></td>
									<td><h6 className="">3w ago</h6></td>
									<td><h6 className=""><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr className="d-flex justify-content-start">
									<td className="w-auto">
										{/* eslint-disable-next-line */}
										<a href="">view more</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div className="col-6">
						<span className="w-100 mx-auto p-1 d-flex justify-content-center">
							<h3 className="lead">Shoping Cart</h3>
						</span>
						<span className="refresh">
							<i className="fas fa-refresh float"></i>
						</span>
						<div className="cart-stage">
							<table className="table">
								<tr>
									<td><h6 className="">Purchase #013:</h6></td>
									<td><h6 className="">R 00.00</h6></td>
									{/* eslint-disable-next-line */}
									<td><a href="#"><h6 className=""><strong>details</strong></h6></a></td>
									<td><h6 className=""><strong><i className="fas fa-close pl-1" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr>
									<td><h6 className="">Purchase #023:</h6></td>
									<td><h6 className="">R 00.00</h6></td>
									{/* eslint-disable-next-line */}
									<td><a href="#"><h6 className=""><strong>details</strong></h6></a></td>
									<td><h6 className=""><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr>
									<td><h6 className="">Purchase #024:</h6></td>
									<td><h6 className="">R 00.00</h6></td>
									{/* eslint-disable-next-line */}
									<td><a href="#"><h6 className=""><strong>details</strong></h6></a></td>
									<td><h6 className=""><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
								<tr>
									<td><h6 className="">Purchase #029:</h6></td>
									<td><h6 className="">R 00.00</h6></td>
									{/* eslint-disable-next-line */}
									<td><a href="#"><h6 className=""><strong>details</strong></h6></a></td>
									<td><h6 className=""><strong><i className="fas fa-close" style={{cursor: "pointer"}}></i></strong></h6></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 underline">
						<div className="coupon-text">
							<h1 className="text-uppercase w-100 d-flex justify-content-center">or redeem a coupon&nbsp;&nbsp;<i className="fas fa-bookmark" style={{cursor: "pointer"}}>here</i>.</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="row">
							<div className="col-12 mx-auto">
								<div id="carousel" className="carousel slide pb-5">
									<ul className="carousel-indicators bg-dark">
										<li id="zero" className="active"></li>
										<li id="one"></li>
										<li id="two"></li>
										<li id="three"></li>
									</ul>
									<div className="carousel-inner">
										<div id="item-zero" className="carousel-item active">
											<div className="container">
												<div className="row">
													<div className="col-6 mx-auto">
														{/* eslint-disable-next-line */}
														<img src={Image_01} alt="Lena" className="img-fluid img-thumbnail d-flex align-self-center mx-auto"/>
														<div className="meta">
															<h5>Item One</h5>
															<p>A litle description about this product.</p>
															<span>R 00.00</span>
															<select id="select" className="mx-2">
																<option value="1">1</option>
																<option value="1">2</option>
																<option value="1">3</option>
																<option value="1">4</option>
																<option value="1">5</option>
															</select>
															<button className="btn btn-outline-secondary">Add to cart</button>
														</div>
													</div>
													<div className="col-6 mx-auto">
														{/* eslint-disable-next-line */}
														<img src={Image_04} alt="Lena" className="img-fluid img-thumbnail d-flex align-self-center mx-auto"/>
														<div className="meta">
															<h5>Item Two</h5>
															<p>A litle description about this product.</p>
															<span>R 00.00</span>
															<select id="select" className="mx-2">
																<option value="1">1</option>
																<option value="1">2</option>
																<option value="1">3</option>
																<option value="1">4</option>
																<option value="1">5</option>
															</select>
															<button className="btn btn-outline-secondary">Add to cart</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="item-one" className="carousel-item">
											<div className="container">
												<div className="row">
													<div className="col-6 mx-auto">
														{/* eslint-disable-next-line */}
														<img src={Image_02} alt="Lena" className="img-fluid img-thumbnail d-flex align-self-center mx-auto"/>
														<div className="meta">
															<h5>Item Three</h5>
															<p>A litle description about this product.</p>
															<span>R 00.00</span>
															<select id="select" className="mx-2">
																<option value="1">1</option>
																<option value="1">2</option>
																<option value="1">3</option>
																<option value="1">4</option>
																<option value="1">5</option>
															</select>
															<button className="btn btn-outline-secondary">Add to cart</button>
														</div>
													</div>
													<div className="col-6 mx-auto">
														{/* eslint-disable-next-line */}
														<img src={Image_03} alt="Lena" className="img-fluid img-thumbnail d-flex align-self-center mx-auto"/>
														<div className="meta">
															<h5>Item Four</h5>
															<p>A litle description about this product.</p>
															<span>R 00.00</span>
															<select id="select" className="mx-2">
																<option value="1">1</option>
																<option value="1">2</option>
																<option value="1">3</option>
																<option value="1">4</option>
																<option value="1">5</option>
															</select>
															<button className="btn btn-outline-secondary">Add to cart</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="item-two" className="carousel-item">
											<div className="container">
												<div className="row">
													<div className="col-6 mx-auto">
														{/* eslint-disable-next-line */}
														<img src={Image_03} alt="Lena" className="img-fluid img-thumbnail d-flex align-self-center mx-auto"/>
														<div className="meta">
															<h5>Item Five</h5>
															<p>A litle description about this product.</p>
															<span>R 00.00</span>
															<select id="select" className="mx-2">
																<option value="1">1</option>
																<option value="1">2</option>
																<option value="1">3</option>
																<option value="1">4</option>
																<option value="1">5</option>
															</select>
															<button className="btn btn-outline-secondary">Add to cart</button>
														</div>
													</div>
													<div className="col-6 mx-auto">
														{/* eslint-disable-next-line */}
														<img src={Image_02} alt="Lena" className="img-fluid img-thumbnail d-flex align-self-center mx-auto"/>
														<div className="meta">
															<h5>Item Six</h5>
															<p>A litle description about this product.</p>
															<span>R 00.00</span>
															<select id="select" className="mx-2">
																<option value="1">1</option>
																<option value="1">2</option>
																<option value="1">3</option>
																<option value="1">4</option>
																<option value="1">5</option>
															</select>
															<button className="btn btn-outline-secondary">Add to cart</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="item-three" className="carousel-item">
											<div className="container">
												<div className="row">
													<div className="col-6 mx-auto">
														{/* eslint-disable-next-line */}
														<img src={Image_04} alt="Lena" className="img-fluid img-thumbnail d-flex align-self-center mx-auto"/>
														<div className="meta">
															<h5>Item Seven</h5>
															<p>A litle description about this product.</p>
															<span>R 00.00</span>
															<select id="select" className="mx-2">
																<option value="1">1</option>
																<option value="1">2</option>
																<option value="1">3</option>
																<option value="1">4</option>
																<option value="1">5</option>
															</select>
															<button className="btn btn-outline-secondary">Add to cart</button>
														</div>
													</div>
													<div className="col-6 mx-auto">
														{/* eslint-disable-next-line */}
														<img src={Image_01} alt="Lena" className="img-fluid img-thumbnail d-flex align-self-center mx-auto"/>
														<div className="meta mx-auto">
															<h5>Item Eight</h5>
															<p>A litle description about this product.</p>
															<span>R 00.00</span>
															<select id="select" className="mx-2">
																<option value="1">1</option>
																<option value="1">2</option>
																<option value="1">3</option>
																<option value="1">4</option>
																<option value="1">5</option>
															</select>
															<button className="btn btn-outline-secondary">Add to cart</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}