import React, { Component } from 'react';
import Header from './Header';
import Signup from './SignUp';
import Home from './Home';
import Home_1 from './Home_1';
import Home_2 from './Home_2';
import Home_3 from './Home_3';
import Home_4 from './Home_4';
import Home_5 from './/Home_5';
import Home_6 from './Home_6';
import '../styles/app.css';

const Home_container = () => (
  <div className="app-container">
    <div className="section-1">
      <Header />
      <Home />
    </div>
    <div className="section-2">
      <Home_1 />
    </div>
    <div className="section-3">
      <Home_2 />
    </div>
    <div className="section-4">
      <Home_3/>
      <Home_4 />
    </div>
    <div className="section-5">
      <Home_5 />
    </div>
   <div className="section-6">
     <Home_6 />
   </div>
</div>

);

export default  Home_container;
