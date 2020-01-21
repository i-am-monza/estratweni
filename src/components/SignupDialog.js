import React, { Component } from 'react';

export class SignupDialog extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    captureInput = e => {

        switch (e.target.id) {
            case 'usernameInput':
                {
                    this.setState({ username: e.target.value });

                    break;
                }
            case 'emailInput':
                {
                    this.setState({ email: e.target.value });

                    break;
                }
            case 'passwordInput':
                {
                    this.setState({ password: e.target.value });

                    break;
                }
            case 'confirmPasswordInput':
                {
                    this.setState({ confirmPassword: e.target.value });

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

        if (Object.keys(this.state).length !== 0 && Object.keys(this.state).length === 4) {
            let user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            };

            this.props.signup_user(user);
        }
    }

    handleCancel = () => {

    }
    render() {
        return (
            <div className="card signup container">
                <div className="card-body">
                  <h4 className="card-title">Sign-up</h4>
                  <p className="card-description">
                  	{/* eslint-disable-next-line */}
                    Or use <a href="#" className="mx-2"><i className="fa fa-google mx-2"></i></a><a href="#" className="mx-2"><i className="fa fa-facebook"></i></a>
                  </p>
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Username</label>
                      <input type="text" autoComplete="new-password" className="form-control" id="usernameInput" placeholder="Username" onChange={event => this.captureInput(event)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" autoComplete="new-password" className="form-control" id="emailInput" placeholder="Email" onChange={event => this.captureInput(event)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                 		{/* eslint-disable-next-line */}
                      <input type="password" autoComplete="new-password" className="form-control" id="passwordInput" placeholder="Password" onChange={event => this.captureInput(event)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                 		{/* eslint-disable-next-line */}
                      <input type="password" autoComplete="new-password" className="form-control" id="confirmPasswordInput" placeholder="Password" onChange={event => this.captureInput(event)}/>
                    </div>
                    <div className="form-check form-check-flat form-check-primary">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/>
                        Remember me
                      <i className="input-helper"></i></label>
                    </div>
                    <button id="submit-signup" className="btn btn-primary mr-2" onClick={() => this.handleSubmit()}>Submit</button>
                    <button id="cancel" className="btn btn-light" onClick={() => this.handleCancel()}>Cancel</button>
                  </form>
                </div>
            </div>
        );
    }
}