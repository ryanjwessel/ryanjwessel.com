import React from 'react';

// Styles
// import './Portfolio.scss';

function Portfolio(props) {
	return (
		<div className="row portfolio">
			<div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 center-xs">
				{ (props.page === 'tech') ? (
					<p>coming soon...</p>
				) : (
					<p>coming soon...</p>
				)}
			</div>
		</div>
	);
}

export default Portfolio;
