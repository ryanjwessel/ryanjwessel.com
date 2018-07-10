import React from 'react';
import ReactDOM from 'react-dom';

// Styles
// import './Profile.scss';

class Profile extends React.Component {
  render() {
    return (
		<div className="row profile">
			<div className="col-xs-offset-1 col-xs-10 center-xs">
				<img src="../_assets/headshot_square_sm.jpg" alt="Ryan Wessel Headshot" />
				<p>i'm ryan, freelance web developer, business owner, and golfer.</p>
			</div>
			<div className="col-xs-offset-1 col-xs-10 center-xs">
				<button type="button">MY WORK</button>
			</div>
			<div className="col-xs-offset-1 col-xs-10 center-xs">
				<button type="button">TECH I'M USING</button>
			</div>
		</div>
    );
  }
}

export default Profile;
