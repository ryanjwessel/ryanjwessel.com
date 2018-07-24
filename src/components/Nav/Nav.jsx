import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import './Nav.scss';

function Nav(props) {
	return (
		<nav>
			<Link to="/" className={`link-wrapper ${props.location.pathname === '/' ? 'active-page' : ''}`}>
				HOME
			</Link>
			<Link to="/tech" className={`link-wrapper ${props.location.pathname === '/tech' ? 'active-page' : ''}`}>
				TECH
			</Link>
			<Link to="/work" className={`link-wrapper ${props.location.pathname === '/work' ? 'active-page' : ''}`}>
				WORK
			</Link>
			<Link to="/about" className={`link-wrapper ${props.location.pathname === '/about' ? 'active-page' : ''}`}>
				ABOUT
			</Link>
			<Link to="/contact" className={`link-wrapper ${props.location.pathname === '/contact' ? 'active-page' : ''}`}>
				CONTACT
			</Link>
		</nav>
	);
}

Nav.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(Nav);
