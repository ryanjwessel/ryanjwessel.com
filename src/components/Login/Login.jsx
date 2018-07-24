import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	attemptLogin
} from '../../actions';

// Styles
import './Login.scss';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.attemptLogin = this.attemptLogin.bind(this);
	}

	componentDidMount() {
		// Check to see if the user is already logged in here? Then maybe update the form to include a logout button or something.
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}

	attemptLogin() {
		const { dispatch } = this.props;
		const { username, password } = this.state;

		dispatch(attemptLogin(username, password));
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 center-xs" id="login-box">
					<div className="row field-wrapper">
						<div className="col-xs-12">
							<label htmlFor="username">username</label>
							<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row field-wrapper">
						<div className="col-xs-12">
							<label htmlFor="password">password</label>
							<input type="password" name="password" value={this.state.password} onChange={this.handleChange} data-lpignore="true" />
						</div>
					</div>
					<div className="row button-wrapper">
						<div className="col-xs-12">
							<button type="button" onClick={this.attemptLogin}>
								login
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state
	};
}

Login.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Login);
