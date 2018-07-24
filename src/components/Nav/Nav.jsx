import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import './Nav.scss';

function Nav(props) {
	return (
		<nav>
			<div className={`link-wrapper ${props.location.pathname === '/' ? 'active-page' : ''}`}>
				<Link to="/">HOME</Link>
			</div>
			<div className={`link-wrapper ${props.location.pathname === '/tech' ? 'active-page' : ''}`}>
				<Link to="/tech">TECH</Link>
			</div>
			<div className={`link-wrapper ${props.location.pathname === '/work' ? 'active-page' : ''}`}>
				<Link to="/work">WORK</Link>
			</div>
			<div className={`link-wrapper ${props.location.pathname === '/about' ? 'active-page' : ''}`}>
				<Link to="/about">ABOUT</Link>
			</div>
			<div className={`link-wrapper ${props.location.pathname === '/contact' ? 'active-page' : ''}`}>
				<Link to="/contact">CONTACT</Link>
			</div>
		</nav>
	);
}

Nav.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(Nav);
