import React from 'react';
import { Link } from 'react-router-dom';

// Styles
// import './Contact.scss';

function Contact(props) {
	return (
		<div className="row contact">
			<div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 center-xs">
				<p>if i'm a good fit for a freelance or contract role you can email me at <a href="mailto:ryan@wesselstudios.com">ryan@wesselstudios.com</a>.</p>
				<p>if you'd like to chat about freelancing, web development, WestWorld, golf, or anything else you can reach me on <a href="https://twitter.com/wesselstudios" target="_blank">Twitter</a>.</p>
			</div>
		</div>
	);
}

export default Contact;
