import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';

import fs from 'fs';
import parseXML from './parseXML/parseXML';
import axios from 'axios';

import Navbar from './Components/Navbar.jsx';
import Map from './Components/Map.jsx';

// import Hello from './hello.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAddress: 'Paris, France',
      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219
      }
    }
  }

  componentWillMount() {
    axios.get(`/places`)
    .then((res) => {
      console.log(res.data.plist.array[0]);
      this.setState({
        attractions: res.data.plist.array[0]
      })
    });
    
  }

  render() {

    return (
      <div>
        <Navbar />

        <div className="main-container col-xs-12 col-md-12 red">
          <div className="row">
            <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
          </div>

          <div className="row">
            
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('application'));
