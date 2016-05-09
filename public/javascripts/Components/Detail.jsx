import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.attraction.string[3]}</h1>
        <h4>Website: 
          <a href={this.props.attraction.string[2]}>
            {this.props.attraction.string[2]}
          </a>
        </h4>
      </div>
    )
  }
}