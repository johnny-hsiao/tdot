import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import ReturnFileName from '../Util/ReturnFileName'

let image = {
  height: '40vh', 
  width: '40vh'
}

export default class Photo extends Component {
  render() {
    return (
      <div>

        { this.props.attraction
            ? <img id="attraction_photo" style={image } src={ '../../assets/images/' + ReturnFileName(this.props.attraction.string[3]) }/>
            : null
        }
      </div>
    )
  }
};