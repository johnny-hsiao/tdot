import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this._updateSelectedAttraction = this._updateSelectedAttraction.bind(this);
    this._updateFavorited = this._updateFavorited.bind(this);
  }

  _updateSelectedAttraction(e) {
    let name = e.target.getAttribute('id');
    console.log("clicked", name);
    this.props._selectAttraction(name);
  }

  _updateFavorited(e) {
    let name = e.target.getAttribute('id');
    console.log("clicked", name);
    this.props._toggleFavorites(name);
  }

  render() {
    return (
      <div>
        <h1>Attractions</h1>

        <ul>
          {this.props.attractions.map((attraction) =>
            attraction.string
              ? <li className="list-group-item" key={"attractionName" + attraction.string[3]}>
                  {attraction.string[3] + "  "}
                  <button className="btn btn-default" 
                                key={attraction.string[3]+"btn"}
                                 id={attraction.string[3]}
                            onClick={this._updateSelectedAttraction}
                  >
                    {"Select"}
                  </button>
                  <button className="btn btn-default" 
                                key={attraction.string[3]+"fav"}
                                 id={attraction.string[3]}
                            onClick={this._updateFavorited}
                  >
                    { 
                      this.props.favorites && this.props.favorites.indexOf(attraction.string[3]) >= 0
                      ? <span className="glyphicon glyphicon-heart"></span>
                      : "false"
                    }
                    
                  </button>
                </li>



              : null
          )}
        </ul>
      </div>
    )
  }
};