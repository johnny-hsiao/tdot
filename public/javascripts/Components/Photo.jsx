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

        { this.props.attractionSelected
            ? <img id="attraction_photo" style={image } src={ '../../assets/images/' + ReturnFileName(this.props.attractionSelected.string[3]) }/>
            : null
        }
      </div>
    )
  }
};