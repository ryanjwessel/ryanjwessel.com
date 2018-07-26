import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	fetchPortfolioItemsIfNeeded,
	selectPortfolioType
} from '../../actions';

// Styles
import './Portfolio.scss';

const SingleItem = props => {
	const descriptionHtml = {
		__html: props.details.description
	};

	return (
		<div className="row portfolio-item">
			<div className="col-xs-12">
				<button
					type="button"
					onClick={() => props.returnToPortfolioView('')}
				>
					&lt; back
				</button>
			</div>
			<div className="col-xs-12 center-xs">
				<img src={props.details.img} />
			</div>
			<div className="col-xs-12 center-xs">
				<p dangerouslySetInnerHTML={descriptionHtml} />
			</div>
			{ props.details.url &&
				<div className="col-xs-12 center-xs">
					<a href={props.details.url} target="_blank" rel="noopener noreferrer">live site</a>
				</div>
			}
		</div>
	);
};

const PortfolioItems = props => {
	return (
		<div className="row center-xs portfolio-container">
			{Object.keys(props.items).map(item => {
				return (
					<div key={item} className="col-xs-12 col-sm-6 col-md-5 item-wrapper">
						<button
							type="button"
							onClick={() => props.viewItem(item)}
						>
							<img src={props.items[item].img} alt={`${item}`} />
						</button>
					</div>
				);
			})}
		</div>
	);
};

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedPortfolioItem: '',
		};

		this.selectPortfolioItem = this.selectPortfolioItem.bind(this);
	}

	componentDidMount() {
		const { dispatch, location } = this.props;

		dispatch(selectPortfolioType(location.pathname));
		dispatch(fetchPortfolioItemsIfNeeded(location.pathname));
	}

	selectPortfolioItem(item) {
		this.setState({
			selectedPortfolioItem: item,
		});
	}

	render() {
		const { items, isFetching, location } = this.props;
		return (
			<div className="row">
				<div className="col-xs-12 center-xs">
					<h1>{location.pathname}</h1>
				</div>
				<div className="col-xs-12">
					{ items.length === 0 && isFetching ? (
						<p>Loading...</p>
					) : (items.length === 0 && !isFetching) ? (
						<p>Sorry, no items were available.</p>
					) : (this.state.selectedPortfolioItem !== '') ? (
						<SingleItem
							details={items[this.state.selectedPortfolioItem]}
							returnToPortfolioView={this.selectPortfolioItem}
						/>
					) : (
						<PortfolioItems
							items={items}
							viewItem={this.selectPortfolioItem}
						/>
					)}
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
	isFetching: PropTypes.bool.isRequired,
	selectedPortfolioType: PropTypes.string.isRequired,
};

PortfolioItems.propTypes = {
	items: PropTypes.object.isRequired,
	viewItem: PropTypes.func.isRequired,
};

SingleItem.propTypes = {
	details: PropTypes.object.isRequired,
	returnToPortfolioView: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Portfolio);
