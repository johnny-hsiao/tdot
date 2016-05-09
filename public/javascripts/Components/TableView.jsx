import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Photo from './Photo.jsx';
import Detail from './Detail.jsx';

export default class TableView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Points of Interest</h1>
        <table className="table table-bordered">
        <tbody>
          { this.props.attractions &&
            this.props.attractions.map((attraction) =>

            <tr key={attraction.string[3]}>
              <td className="photo col-xs-2 col-md-2"><Photo attraction={attraction} /></td>
              <td className="detail col-xs-9 col-md-9"><Detail attraction={attraction} /></td>
            </tr>
          )}
        </tbody>
        </table>
      </div>
    )
  }
}