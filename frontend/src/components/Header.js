import React, { Component } from 'react';
import '../styles/header.css';

// need to get rid of the background color later
class Header extends Component {
	render() {
		return (
			<div className="navbar">
				<ul className="nav">
					<li className="logo"><img src={require('../images/Logo@1x.png')}/></li>
				  	<li className="athletes"><a href="#">Athlete</a></li>
				  	<li className="coach"><a href="#">Coach</a></li>
				  	<li className="login"><a href="/login">Login</a></li>
				</ul>
			</div>
		);
	}
}

export default Header;
