import React, { Component } from 'react';
import '../styles/signIn.css';

class login_component extends Component {
  render() {
    return (
      <div className= "login-bg">
      <form className="login-container">
        <input
          className="email field"
          type="text"
          placeholder="Email" />
         <input
           className="password field"
           type="password"
           placeholder="Password" />

      </form>

    </div>
    )
  }
}

export default login_component;
