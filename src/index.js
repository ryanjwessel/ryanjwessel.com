import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

// Components
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

// Styles
import './styles/main.scss';

// Store
import configureStore from './store/configureStore';
const store = configureStore();

class RootLogicWrapper extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		ReactGA.initialize('UA-122512271-2');
	}

	componentDidUpdate(prevProps) {
		const { pathname } = this.props.location;

		if(prevProps.location.pathname !== pathname) {
			ReactGA.pageview(pathname);
		}
	}
	
	render() {
		return(
			<div className="container-fluid">
				<Nav />
				<div className="row">
					<div className="col-xs-12 center-xs">
						<h1>ryan wessel</h1>
					</div>
				</div>
				<Switch>
					{['/', '/about'].map((path, index) => 
						<Route exact path={path} component={Profile} key={index} />
					)}
					{['/tech', '/work'].map((path, index) => 
						<Route exact path={path} component={Portfolio} key={index} />
					)}
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/admin" component={Login} />
					<Route component={Error}/>
				</Switch>
			</div>
		);
	}
}

RootLogicWrapper.propTypes = {
	location: PropTypes.object.isRequired,
};

const RootWrapperWithRouter = withRouter(RootLogicWrapper);

const Error = () => {
	return(
		<div className="row">
			<div className="col-xs-12 center-xs">
				<h1>404 Error!</h1>
				<h1>Sorry, this page could not be found.</h1>
			</div>
		</div>
	);
};

render(
	<BrowserRouter>
		<Provider store={store}>
			<RootWrapperWithRouter />
		</Provider>	
	</BrowserRouter>,
	document.getElementById('root')
);
