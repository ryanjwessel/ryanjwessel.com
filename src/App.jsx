import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Nav from './Nav/Nav.jsx';

// Styles
import './_styles/main.scss';

class App extends React.Component {
  render() {
    return (
		<div className="container">
			<Nav />
		</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
