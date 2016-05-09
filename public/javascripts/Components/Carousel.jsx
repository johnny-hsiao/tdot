import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import ReturnFileName from '../Util/ReturnFileName'

let image = {
  height: '150px', 
  width: '150px',
  overflow: 'hidden'
}

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this._updateSelectedAttraction = this._updateSelectedAttraction.bind(this);
  }

  _updateSelectedAttraction(e) {
    let name = e.currentTarget.getAttribute('id');
    console.log("clicked", e.currentTarget);
    this.props._selectAttraction(name);
  }

  render() {
    return (
      <div>

        <div className="well">
          <div id="myCarousel" className="carousel slide">
            {this.props.attractions &&
            <div className="carousel-inner">
              <div className="item active">
                <div className="row">
                  {this.props.attractions.map((attraction, index) => 
                    index < 4 ?
                    <div className="col-sm-3 col-md-3" 
                             style={image} 
                               key={attraction.string[3]+"btn"}
                                id={attraction.string[3]}
                           onClick={this._updateSelectedAttraction}>
                      <a href="#x">
                        <img src={'../../assets/images/' + ReturnFileName(attraction.string[3])} alt="Image" />
                      </a>
                    </div>
                    : null
                  )}
                </div>
              </div>
              <div className="item">
                <div className="row">
                  {this.props.attractions.map((attraction, index) => 
                    index >= 4 && index < 8 ?
                    <div className="col-sm-3 col-md-3" 
                             style={image} 
                               key={attraction.string[3]+"btn"}
                                id={attraction.string[3]}
                           onClick={this._updateSelectedAttraction}>>
                      <a href="#x">
                        <img src={'../../assets/images/' + ReturnFileName(attraction.string[3])} alt="Image" />
                      </a>
                    </div>
                    : null
                  )}
                </div>
              </div>

              <div className="item">
                <div className="row">
                  {this.props.attractions.map((attraction, index) => 
                    index >= 8 && index < 12 ?
                    <div className="col-sm-3 col-md-3" 
                             style={image} 
                               key={attraction.string[3]+"btn"}
                                id={attraction.string[3]}
                           onClick={this._updateSelectedAttraction}>>
                      <a href="#x">
                        <img src={'../../assets/images/' + ReturnFileName(attraction.string[3])} alt="Image" />
                      </a>
                    </div>
                    : null
                  )}
                </div>
              </div>

            </div>
            }
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>

            <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
            
          </div>

        </div>

      </div>
    )
  }
}