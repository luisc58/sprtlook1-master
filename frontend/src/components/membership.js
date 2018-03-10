import React, { Component } from 'react';
import '../styles/membership-component.css';

const Membership = (props) => (
  <div className="Membership-container">
    <div className="mem-con-top">
      <h1> Sprtlook {props.type}</h1>
      <h2>  ${props.price}<span> / month</span></h2>
      <h3> {props.contract || " No contract"}</h3>
      <hr />
    </div>

    <div className="mem-con-bottom">
      <h3> Create a profile </h3>
        <h3> Connect with friends and athletes </h3>
        <h3> Find Jobs </h3>
        <h3> Connect with coaches </h3>
        <h3> Become a trainer </h3>
        <h3> Highlight video </h3>
     </div>
     <hr />
     <button className= "mem-btn"> Get {props.type} </button>
  </div>
)

export default Membership;
