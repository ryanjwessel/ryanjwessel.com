import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Nav from './Nav/Nav';
import Profile from './Profile/Profile.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Contact from './Contact/Contact.jsx';

const App = () => (
	<div className="container-fluid">
		<Nav />
		<div className="row">
			<div className="col-xs-12 center-xs">
				<h1>ryan wessel</h1>
			</div>
		</div>
		<Route exact path="/" render={() => <Profile page="home" /> } />
		<Route path="/tech" render={() => <Portfolio page="tech" /> } />
		<Route path="/work" component={Portfolio} />
		<Route path="/about" render={() => <Profile page="about" /> } />
		<Route path="/contact" component={Contact} />
	</div>
);

export default App;
