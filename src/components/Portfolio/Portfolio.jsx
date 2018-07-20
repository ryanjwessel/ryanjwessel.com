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
		<div className="row portfolio-items">
			{Object.keys(props.items).map(item => {
				return (
					<div key={item} className="col-xs-12 item-wrapper">
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

	randomizeObjects() {
		
	}

	render() {
		const { items } = this.props;
		return <PortfolioItems items={items} />;
	}
}

function mapStateToProps(state) {
	const { selectedPortfolioType, itemsByPortfolioType } = state;
	const { isFetching, lastUpdated, items } = itemsByPortfolioType[selectedPortfolioType] || {
		isFetching: true,
		items: []
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
};

PortfolioItems.propTypes = {
	items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Portfolio);
