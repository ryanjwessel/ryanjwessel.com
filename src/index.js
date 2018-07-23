import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

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
				<Route exact path="/" render={() => <Profile page="home" /> } />
				<Route path="/about" render={() => <Profile page="about" /> } />
				{['/tech', '/work'].map((path, index) => 
					<Route path={path} component={Portfolio} key={index} />
				)}
				<Route path="/contact" component={Contact} />
			</div>
		);
	}
}

const RootWrapperWithRouter = withRouter(RootLogicWrapper);

render(
	<BrowserRouter>
		<Provider store={store}>
			<RootWrapperWithRouter />
		</Provider>	
	</BrowserRouter>,
	document.getElementById('root')
);
