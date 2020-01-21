// Import the React library
import React, { Component } from 'react';
// Import components from the react-router-dom library
import { BrowserRouter, Route } from 'react-router-dom';
// Import scripts
import './assets/js/scripts';
// Import main styles
import './assets/css/all.min.css';
import './assets/css/main-style.css';
// Import components
import { Header } from './components/Header.js';
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Contact } from './components/Contact.js';
import { Catalogue } from './components/Catalogue.js';
import { Cart } from './components/Cart.js';
import { Account } from './components/Account.js';
import { Help } from './components/Help.js';
import { Footer } from './components/Footer.js';
import { SigninDialog } from './components/SigninDialog.js';
import { SignupDialog } from './components/SignupDialog.js';

// Front-end application parent component
export class Application extends Component {

  /**@enum private string**/
  url_ = "http://localhost:3008";

  constructor() {
    super();

    this.state = {data: {}, action: "Login"};
  }

  componentDidMount() {
    let data = localStorage.getItem('logged');
    if(data !== null || data !== undefined) {
      this.setState(() => {
        return {data: data};
      });
    }
  }

  cache = data => {
    localStorage.setItem('logged', JSON.stringify(data));
  }

  sendRequest = async (path, init) => {
    let request = await fetch(this.url_.concat(path), init);
    let response = await request.json();

    return response;
  }

  signout_user = arg => {
    let option = window.confirm(`User ${arg} signing out?`);

    if(option === true) {
      this.setState(() => {
        return {data: {}};
      });

      window.location.href = "http:localhost:3000/";
    }
  }

  signin_user = arg => {
    let path = "/estratweni/signin";
    let init = {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(arg)};

    this.sendRequest(path, init)
      .then(data => {
        this.setState(() => {
          return {data: data};
        }, () => {
          return {action: this.state.data.username}
        });

        this.cache(data);

        alert(`User ${data.username} has signed in successfully.`);
      }, err => {
        alert("Error occured signing in user: " + err);
      });
  }

  signup_user = arg => {
    let path = "/estratweni/signup";
    let init = {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(arg)};

    this.sendRequest(path, init)
      .then(data => {
        alert(`User ${data.user.username} has signed up successfully.`);
        window.location.href = "http:localhost:3000/";
      }, err => {
        alert("Error occured signing up user: " + err);
      });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header data={this.state.action} signout_user={this.signout_user}/>

          <Route exact={true} path={['/', '/Home']} component={() => <Home/>}/>
          <Route path={'/About'} component={() => <About/>}/>
          <Route path={'/Contact'} component={() => <Contact/>}/>
          <Route path={'/Catalogue'} component={() => <Catalogue/>}/>
          <Route path={'/Cart'} component={() => <Cart/>}/>
          <Route path={'/Account'} component={() => <Account/>}/>
          <Route path={'/Help'} component={() => <Help/>}/>

          <Footer />

          <SigninDialog signin_user={this.signin_user} />
          <SignupDialog signup_user={this.signup_user} />
        </BrowserRouter>
      </div>
    );
  }
}