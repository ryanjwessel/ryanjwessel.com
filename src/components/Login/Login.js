import React from 'react';

// Styles
import './Login.scss';

function Login() {
	return (
		<div className="row">
			<div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 center-xs" id="login-box">
				<div className="row field-wrapper">
					<div className="col-xs-12">
						<label htmlFor="username">username</label>
						<input type="text" name="username" />
					</div>
				</div>
				<div className="row field-wrapper">
					<div className="col-xs-12">
						<label htmlFor="password">password</label>
						<input type="password" name="password" data-lpignore="true" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
