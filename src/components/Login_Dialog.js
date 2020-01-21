import React, {Component} from 'react';

export class LoginDialog extends Component {

	constructor() {
		super();

		this.state = {};
	}

	captureInput = e => {

		switch(e.target.id)
		{
			case 'emailInput':
			{
				this.setState({email: e.target.value});

				break;
			}
			case 'passwordInput':
			{
				this.setState({password: e.target.value});

				break;
			}
			default:
			{
				console.error("Error logging in user.");

				break;
			}
		}
	}

	handleSubmit = () => {

		if(Object.keys(this.state) !== 0 && Object.keys(this.state) === 2)
		{

		}
	}

	handleCancel = () => {

	}

	render() {
		return (
			<div className="card">
				<div className="card-body">
					<h4 className="card-title lead">Sign-In</h4>
					<p className="card-description">Or not registered yet? <a href="#">Sign up</a>.</p>
					<form className="forms-sample">
					  <div className="form-group">
					    <label for="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control" id="emailInput" placeholder="Enter email"/>
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
					  </div>
					  <div className="action-buttons d-flex justify-content-around">
						  <button type="submit" className="btn btn-success mr-2" onClick={() => this.handleSubmit()}>Submit</button>
						  <button className="btn btn-light" onClick={() => this.handleCancel()}>Cancel</button>
					  </div>
					</form>
				</div>
			</div>
		);
	}
}