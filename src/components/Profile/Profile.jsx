import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styles
import './Profile.scss';

function Profile(props) {
	return (
		<div className="row profile">
			<div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 center-xs">
				<img src="http://ryanwessel.com/img/headshot_square_sm.jpg" alt="Ryan Wessel Headshot" />
				{ props.location.pathname === '/' &&
					<p>
						i&apos;m ryan.&nbsp;
						<a href="https://upwork.com/fl/ryanwessel" target="_blank" rel="noopener noreferrer">freelance web developer</a>,&nbsp;
						<a href="http://wesselstudios.com" target="_blank" rel="noopener noreferrer">business owner</a>,
						and golfer.
					</p>
				}
			</div>
			{ props.location.pathname === '/' &&
				<div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 center-xs">
					<Link to="/tech"><button type="button">MY TECH</button></Link>
					<br />
					<Link to="/work"><button type="button">MY WORK</button></Link>
				</div>
			}
			{ props.location.pathname === '/about' &&
				<div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 center-xs">
					<p>hi.</p>
					<p>i&apos;m a front-end web developer.</p>
					<p>this is the <Link to="/tech">tech</Link> that i work with.</p>
					<p>currently working on growing <a href="http://wesselstudios.com" target="_blank" rel="noopener noreferrer">wessel studios llc</a> and learning full-stack development.</p>
					<p>say hi on <a href="https://twitter.com/wesselstudios" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
				</div>
			}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		state
	};
}

Profile.propTypes = {
	location: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Profile);