import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';

import fs from 'fs';
import parseXML from './parseXML/parseXML';
import axios from 'axios';

import Navbar from './Components/Navbar.jsx';
import TableView from './Components/TableView.jsx';
import MapView from './Components/MapView.jsx';

let style = {
  marginLeft: '110px',
  marginRight: '110px'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAddress: 'Paris, France',
      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219
      },
      isLoggedIn: false
    }
    this._selectAttraction = this._selectAttraction.bind(this);
    this._toggleFavorites = this._toggleFavorites.bind(this);
    this._toggleBixi = this._toggleBixi.bind(this);
    this._toggleView = this._toggleView.bind(this);
    this._toggleLogIn = this._toggleLogIn.bind(this);
  }

  componentWillMount() {
    axios.get(`/places`)
    .then((res) => {

      this.setState({
        attractions: res.data.plist.array[0].dict,
        attractionSelected: res.data.plist.array[0].dict[0],
        favorites: [],
        mapView: true
      })
    });

    axios.get(`/bixi`)
    .then((res) => {
      this.setState({
        bixi: res.data,
        showBixi: false
      })
    }); 
  }

  _selectAttraction(attr) {
    this.state.attractions.map((attraction) => {
      if (attraction.string[3] === attr) {
        this.setState({
          attractionSelected: attraction
        })
      }
    })
  }

  _toggleBixi() {
    this.setState({
      showBixi: !this.state.showBixi
    })
  }

  _toggleView() {
    this.setState({
      mapView: !this.state.mapView
    })
  }

  _toggleLogIn() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  _toggleFavorites(attraction) {
    let indexOfAttraction = this.state.favorites.indexOf(attraction);

    if (indexOfAttraction < 0) {
      this.setState({
        favorites: this.state.favorites.concat(attraction)
      })
    } 
    else {
      if (this.state.favorites.length == 1) {
        this.setState({
          favorites: []
        })
      }
      else {
        this.setState({
          favorites: this.state.favorites.slice(0, indexOfAttraction)
                   + this.state.favorites.slice(indexOfAttraction+1, this.state.favorites.size)
        })
      }
    }
  }

  render() {

    return (
      <div>
        <Navbar {...this.state} _toggleLogIn={this._toggleLogIn} />
        <br />

        {this.state.mapView ?
        <div className="main-container map-view col-xs-12 col-md-11" style={style}>
          <div className="row">
            <div className="tabular-view col-xs-12 col-md-11">
              <button className="btn btn-default" onClick={this._toggleView}>Map View</button>
            </div>
          </div>
          <div className="row">
            <div className="mapview col-xs-12 col-md-11">
              { this.state.attractions &&
              <MapView {...this.state} _selectAttraction={this._selectAttraction}
                                        _toggleFavorites={this._toggleFavorites} 
                                             _toggleBixi={this._toggleBixi} />
              }
            </div>
          </div>
  
        </div>
        :
        <div className="main-container tabular-view col-xs-12 col-md-11 red" style={style}>
          <div className="row">
            <div className="tabular-view col-xs-12 col-md-11">
              <button className="btn btn-default" onClick={this._toggleView}>Map View</button>
            </div>
          </div>
          <div className="row">
            <div className="tabular-view col-xs-12 col-md-11">
              <TableView {...this.state} />
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('application'));