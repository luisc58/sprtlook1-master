import React, { Component } from 'react';
import '../styles/signIn.css';


class SignIn extends Component {
	render() {
		return (
				<div className="signin_container">
					<img src={require('../images/Logo@1x.png')}/>
					<a href="/">Close</a>
					<div className= "login-bg">
		      <form className="login-container">
		        <input
		          className="input email"
		          type="text"
		          placeholder="Email" />
							<hr   />
		         <input
		           className="input password"
		           type="password"
		           placeholder="Password" />
		      </form>
		    </div>
				<button className="btn-login">SIGN UP</button>
				</div>
		);
	}
}

export default SignIn;
