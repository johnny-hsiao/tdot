import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import Carousel from './Carousel.jsx';
import Display from './Display.jsx';
import Map from './Map.jsx';

export default class MapView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        

        <div className="row">

          <div className="display col-xs-4 col-md 4">
              { this.props.attractions && 
                <Display {...this.props} />
              }
          </div>

          <div className="display col-xs-7 col-md 7">
            <Carousel {...this.props} />
          </div>


          <div className="map col-xs-7 col-md 7">
            { this.props.attractionSelected &&
              <Map {...this.props} lat={this.props.attractionSelected.string[1]} lng={this.props.attractionSelected.string[0]} />
            }
          </div>

        </div>
      </div>
    )
  }
}