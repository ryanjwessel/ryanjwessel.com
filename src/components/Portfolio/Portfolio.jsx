import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	fetchPortfolioItemsIfNeeded,
	selectPortfolioType
} from '../../actions';

// Styles
import './Portfolio.scss';

const PortfolioItems = props => {
	return (
		<div className="row center-xs portfolio-container">
			{Object.keys(props.items).map(item => {
				return (
					<div key={item} className="col-xs-12 col-sm-6 col-md-5 item-wrapper">
						<img src={props.items[item].img} alt={`${item}`} />
					</div>
				);
			})}
		</div>
	);
};

class Portfolio extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch, location } = this.props;

		dispatch(selectPortfolioType(location.pathname));
		dispatch(fetchPortfolioItemsIfNeeded(location.pathname));
	}

	render() {
		const { items, location } = this.props;
		return (
			<div className="row">
				<div className="col-xs-12 center-xs">
					<h1>{location.pathname}</h1>
				</div>
				<div className="col-xs-12">
					<PortfolioItems items={items} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { selectedPortfolioType, itemsByPortfolioType } = state;
	const { isFetching, lastUpdated, items } = itemsByPortfolioType[selectedPortfolioType] || {
		isFetching: true,
		items: {}
	};

	return {
		selectedPortfolioType,
		items,
		isFetching,
		lastUpdated
	};
}

Portfolio.propTypes = {
	dispatch: PropTypes.func.isRequired,
	location: PropTypes.object.isRequired,
	items: PropTypes.object.isRequired,
	selectedPortfolioType: PropTypes.string.isRequired,
};

PortfolioItems.propTypes = {
	items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Portfolio);
