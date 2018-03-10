import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleApiWrapper } from 'google-maps-react'
import Container from './mapContainer'

class Map extends Component {
  render() {
    return (
      <div>
        <Container google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC_CVzK1bqbk4wR-eKgUmViSeebImJNLUw ',
})(Map)
