import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const Map = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
      <Gmaps
        width={'50vw'}
        height={'55vh'}
        lat={this.props.lat}
        lng={this.props.lng}
        zoom={15}
        loadingMessage={'Loading...'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />

        {
          this.props.showBixi && this.props.bixi &&
          this.props.bixi.stationBeanList.map((station) =>
            <Marker
            lat={station.latitude}
            lng={station.longitude}
            key={station.stationName}
            icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
            draggable={false}
            onDragEnd={this.onDragEnd} />
          )
        }
        
        <InfoWindow
          lat={this.props.lat}
          lng={this.props.lng}
          content={this.props.attractionSelected.string[3]}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={this.props.lat}
          lng={this.props.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});

module.exports = Map;