import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
		<nav>
			<div className="link-wrapper">
				<a href="">HOME</a>
			</div>
			<div className="link-wrapper">
				<a href="">TECH</a>
			</div>
			<div className="link-wrapper">
				<a href="">WORK</a>
			</div>
			<div className="link-wrapper">
				<a href="">ABOUT</a>
			</div>
			<div className="link-wrapper">
				<a href="">CONTACT</a>
			</div>
		</nav>
    );
  }
}

export default Nav;
