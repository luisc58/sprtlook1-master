import React, { Component } from 'react';
import '../styles/home.css';
import image from '../images/Phone.png';

const Home_2 = () => (
  <div className= "home-2-container">
    <img className="left-img" src = {image} />
    <h1> Get Started! </h1>
    <h3>  Athlete Profile </h3>
    <p>
      Everything a coach needs to evaluate you,
      from highlight videos, stats, experience,
      transcripts, connections, and recommendations
    </p>
    <h3> Social Features </h3>
    <p>
      Connect with friends, athletes, and coaches.
      Learn what it takes to take your skills to the
      next level
     </p>
    <h3> Find job opportunities </h3>
    <p>Find a job related to the sport that you love or become a trainer. </p>
  </div>
);

export default Home_2;
