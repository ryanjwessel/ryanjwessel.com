import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Nav from './Nav/Nav.jsx';
import Profile from './Profile/Profile.jsx';

// Styles
import './_styles/main.scss';

class App extends React.Component {
  render() {
    return (
		<div className="container">
			<Nav />
			<div className="row">
				<div className="col-xs-12 center-xs">
					<h1>ryan wessel</h1>
				</div>
			</div>
			<Profile />
		</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
