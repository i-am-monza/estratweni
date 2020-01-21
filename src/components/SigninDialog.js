import React, { Component } from 'react';

export class SigninDialog extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    captureInput = e => {
        switch (e.target.id) {
            case 'emailInput-signin':
                {
                    this.setState({ email: e.target.value });

                    break;
                }
            case 'passwordInput-signin':
                {
                    this.setState({ password: e.target.value });

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

        if (Object.keys(this.state).length !== 0 && Object.keys(this.state).length === 2) {
            let user = {
                email: this.state.email,
                password: this.state.password
            };
            
            this.props.signin_user(user);
        }
    }

    handleCancel = () => {

    }

    render() {
        return (
            <div className="card signin container">
				<div className="card-body">
					<h4 className="card-title lead">Sign-In</h4>
				    {/* eslint-disable-next-line */}
					<p className="card-description">Or not registered yet? <a id="signupLink" href="#">Sign up</a>.</p>
					<form className="forms-sample">
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Email address</label>
					    <input type="email" autoComplete="new-password" className="form-control" id="emailInput-signin" placeholder="Enter email" onChange={(event) => this.captureInput(event)}/>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Password</label>
					    <input type="password" autoComplete="new-password" className="form-control" id="passwordInput-signin" placeholder="Password" onChange={(event) => this.captureInput(event)}/>
					  </div>
					  <div className="action-buttons d-flex justify-content-around">
						  <button id="submit-signin" className="btn btn-primary mr-2" onClick={() => this.handleSubmit()}>Submit</button>
						  <button id="cancel-signin" className="btn btn-light" onClick={() => this.handleCancel()}>Cancel</button>
					  </div>
					</form>
				</div>
			</div>
        );
    }
}