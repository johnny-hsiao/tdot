import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Control extends Component {
  constructor(props) {
    super(props);
    this._updateShowBixi = this._updateShowBixi.bind(this);
  }

  _updateShowBixi() {
    this.props._toggleBixi();
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
        Bixi: 
        <button className="btn btn-default" 
                  onClick={this._updateShowBixi}>
          {
            this.props.showBixi
            ? "Hide"
            : "Show"
          }
        </button>
        <hr />
      </div>
    )
  }
}