import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
	// selectPortfolioType,
	fetchPortfolioItemsIfNeeded,
	// invalidatePortfolioType
  } from '../../actions'
// import { VisibilityFilters } from '../actions';

// Styles
// import './Portfolio.scss';

// function Portfolio(props) {
// 	return (
// 		<div className="row portfolio">
// 			<div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 center-xs">
// 				{ (props.page === 'tech') ? (
// 					<p>coming soon...</p>
// 				) : (
// 					<p>coming soon...</p>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

// export default Portfolio;



// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.completed)
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// };

// const mapStateToProps = state => ({
// 	state
// });

// export default connect(
// 	mapStateToProps
// )(Portfolio);

class Portfolio extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch, location } = this.props;

		dispatch(fetchPortfolioItemsIfNeeded(location.pathname));
	}

	render() {
		return (
			<PortfolioItems />
		);
	}
}

const PortfolioItems = (items) => {
	return (
		<ul>1</ul>
	)
};

const mapStateToProps = state => ({
	state
});

export default connect(
	mapStateToProps
)(Portfolio);
// export default Portfolio;