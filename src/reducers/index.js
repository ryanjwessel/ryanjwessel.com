import {
	combineReducers
} from 'redux';
import {
	SELECT_PORTFOLIO_TYPE,
	REQUEST_PORTFOLIO_ITEMS,
	RECEIVE_PORTFOLIO_ITEMS
} from '../actions';

const initialState = {
	selected: {

	},
	items: {

	}
};

function selectedPortfolioType(state = initialState.selected, action) {
	switch (action.type) {
	case SELECT_PORTFOLIO_TYPE:
		return action.portfolioType;
	default:
		return state;
	}
}

function items(
	state = {
		isFetching: false,
		items: []
	},
	action
) {
	switch (action.type) {
	case REQUEST_PORTFOLIO_ITEMS:
		return Object.assign({}, state, {
			isFetching: true,
		});
	case RECEIVE_PORTFOLIO_ITEMS:
		return Object.assign({}, state, {
			isFetching: false,
			items: action.items,
			lastUpdated: action.receivedAt
		});
	default:
		return state;
	}
}

function itemsByPortfolioType(state = initialState.items, action) {
	switch (action.type) {
	case RECEIVE_PORTFOLIO_ITEMS:
	case REQUEST_PORTFOLIO_ITEMS:
		return Object.assign({}, state, {
			[action.portfolioType]: items(state[action.portfolioType], action)
		});
	default:
		return state;
	}
}

const rootReducer = combineReducers({
	itemsByPortfolioType,
	selectedPortfolioType
});

export default rootReducer;