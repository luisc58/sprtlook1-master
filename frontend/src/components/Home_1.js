import React, { Component } from 'react';
import '../styles/home.css';
import image from '../images/collage .png';

const Home_1 = () => (
  <div className="home-1-container">
    <h1> What's Sprtlook? </h1>
    <h2> Mission </h2>
    <p className="Mission">
      Sprtlook empowers more than 2 million
      High School  athletes  and college coaches to
      make and build college teams.
    </p>
    <h2> Community </h2>
    <p>
      Sprtlook’s work will have a big impact on the
      lives of young athletes, and our tools
      work to improve everyday, with every customer
    </p>
    <div className = "right"> <img src= {image}/> </div>
  </div>
);

export default Home_1;
