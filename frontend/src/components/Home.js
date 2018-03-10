import React, { Component } from 'react';
import SignUp from './SignUp';
import Header from './Header';
import '../styles/home.css';

const Home = () => (
	<div className="home-container">
		<h1 className="slogan">
			Connect with Athletes
			<p>Expose your talent</p>
		</h1>
		<div className="signup">
			<SignUp />
		</div>
	</div>
)

export default Home;
