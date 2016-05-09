import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';

import fs from 'fs';
import parseXML from './parseXML/parseXML';
import axios from 'axios';

import Navbar from './Components/Navbar.jsx';
import Control from './Components/Control.jsx';
import Map from './Components/Map.jsx';
import Display from './Components/Display.jsx';
import Photo from './Components/Photo.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAddress: 'Paris, France',
      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219
      },
    }
    this._selectAttraction = this._selectAttraction.bind(this);
    this._toggleFavorites = this._toggleFavorites.bind(this);
    this._toggleBixi = this._toggleBixi.bind(this);
  }

  componentWillMount() {
    axios.get(`/places`)
    .then((res) => {

      this.setState({
        attractions: res.data.plist.array[0].dict,
        attractionSelected: res.data.plist.array[0].dict[0],
        favorites: []
      })
    });

    axios.get(`/bixi`)
    .then((res) => {
      console.log(res.data)
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
    console.log("new", this.state.favorites);
  }

  render() {

    return (
      <div>
        <Navbar />

        <div className="main-container col-xs-12 col-md-12 red">
          <div className="row">
            <div className="control col-xs-12 col-md 12">
              <Control {...this.state} _toggleBixi={this._toggleBixi} />
            </div>
          </div>

          <div className="row">

            <div className="display col-xs-5 col-md 5">
              { this.state.attractions && 
                <Display {...this.state} 
                        _selectAttraction={this._selectAttraction}
                        _toggleFavorites={this._toggleFavorites} />
              }
            </div>

            <div className="photo col-xs-6 col-md 6">
              <Photo {...this.state} />
            </div>

            <div className="map col-xs-6 col-md 6">
            { this.state.attractionSelected &&
              <Map {...this.state} lat={this.state.attractionSelected.string[1]} lng={this.state.attractionSelected.string[0]} />
            }
            </div>
          </div>

          
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('application'));