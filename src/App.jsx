import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Nav from './Nav/Nav.jsx';
import Profile from './Profile/Profile.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Contact from './Contact/Contact.jsx';

// Styles
import './_styles/main.scss';

class App extends React.Component {
  render() {
    return (
		<div className="container-fluid">
			<Nav />
			<div className="row">
				<div className="col-xs-12 center-xs">
					<h1>ryan wessel</h1>
				</div>
			</div>
			<Route exact path="/" render={() => <Profile page="home" /> } />
			<Route path="/tech" component={Portfolio} />
			<Route path="/work" component={Portfolio} />
			<Route path="/about" render={() => <Profile page="about" /> } />
			<Route path="/contact" component={Contact} />
		</div>
    );
  }
}

ReactDOM.render(
	<BrowserRouter>
		<App />	
	</BrowserRouter>,
  	document.getElementById('root')
);
