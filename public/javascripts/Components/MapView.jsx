import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import Carousel from './Carousel.jsx';

export default class MapView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Carousel {...this.props} />
      </div>
    )
  }
}