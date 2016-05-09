import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Navbar extends Component {
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
              <form className="navbar-form navbar-right" role="login">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username" />
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default">Login</button>
              </form>
            </ul>

          </div>
        </div>
      </nav>
      
    )
  }
};