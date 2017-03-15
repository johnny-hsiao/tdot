import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import styles from '../../stylesheets/style.css';
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(e) {
    e.preventDefault();
  }

  logout(e) {
    e.preventDefault();
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">TDOT</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" onClick={this.props._toggleView}>Toggle View</a></li>

              { !this.props.isLoggedIn &&
              <li>
              <form className="navbar-form navbar-right" role="login" onSubmit={this.login}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" name="email" />
                  <input type="password" className="form-control" placeholder="Password" name="password" />
                </div>
                <button type="submit" className="btn btn-default"  >Login</button>
              </form>
              </li>
              }
              { this.props.isLoggedIn &&
                <li>
                <form className="navbar-form navbar-right" role="logout">
                  <button type="submit" className="btn btn-default" onClick={this.logout} >Logout</button>
                </form>
                </li>
              }
            </ul>
            

          </div>
        </div>
      </nav>
      
    )
  }
};