import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './map_component';
import '../styles/home.css';

class Home_4 extends Component {
  render() {
    return(
      <div className="home-4-container">
        <h1>Find coaches all over the US.</h1>
        <form className="find-container">
          <input
            className="inputs_sport"
            type="text"
            placeholder="Sport"
          />
          <input
            className="inputs_location"
            type="text"
            placeholder="Location"
          />
          <button className="btn-find"> → </button>
        </form>
        <div className = "map">
          <Map/>
        </div>

        </div>
    )
  }
}

export default Home_4;
