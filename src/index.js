import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';

// Styles
import './styles/main.scss';

// Store
import configureStore from './store/configureStore';
const store = configureStore();

render(
	<BrowserRouter>
		<Provider store={store}>
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
		</Provider>
	</BrowserRouter>,
  	document.getElementById('root')
);
