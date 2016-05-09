import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import Photo from './Photo.jsx';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this._updateSelectedAttraction = this._updateSelectedAttraction.bind(this);
    this._updateFavorited = this._updateFavorited.bind(this);
    this._updateShowBixi = this._updateShowBixi.bind(this);
  }

  _updateSelectedAttraction(e) {
    let name = e.target.getAttribute('id');
    console.log("clicked", name);
    this.props._selectAttraction(name);
  }

  _updateFavorited(e) {
    let name = e.target.getAttribute('id');
    console.log("clicked", e.target);
    this.props._toggleFavorites(name);
  }

  _updateShowBixi() {
    this.props._toggleBixi();
  }

  render() {
    return (
      <div>
        <h1>{this.props.attractionSelected.string[3]}</h1>
        <hr />

          {this.props.attractionSelected &&
            <div>
              <Photo attraction={this.props.attractionSelected} />

              <h4>Website: </h4>
                <a href={this.props.attractionSelected.string[2]}>{this.props.attractionSelected.string[2]}</a>
              

              <h4>Favorite: </h4>
                <button className="btn btn-default"
                               id={this.props.attractionSelected.string[3]}
                              key={this.props.attractionSelected.string[3]+"btn"}
                          onClick={this._updateFavorited}>
                { this.props.favorites && this.props.favorites.indexOf(this.props.attractionSelected.string[3]) >= 0
                  ? <span className="glyphicon glyphicon-heart"></span>
                  : "false"
                }
                </button>
              

            </div>
          }

        <h4>Bixi: </h4> 
        <button className="btn btn-default" 
                  onClick={this._updateShowBixi}>
          {
            this.props.showBixi
            ? "Hide"
            : "Show"
          }
        </button>
      </div>
    )
  }
};