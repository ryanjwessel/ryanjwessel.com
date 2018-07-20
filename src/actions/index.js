// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/database';
import config from '../config';

// Initialize Firebase
firebase.initializeApp(config);

export const REQUEST_PORTFOLIO_ITEMS = 'REQUEST_PORTFOLIO_ITEMS';
export const RECEIVE_PORTFOLIO_ITEMS = 'RECEIVE_PORTFOLIO_ITEMS';
export const SELECT_PORTFOLIO_TYPE = 'SELECT_PORTFOLIO_TYPE';

export function selectPortfolioType(portfolioType) {
	return {
		type: SELECT_PORTFOLIO_TYPE,
		portfolioType
	};
}

function requestPortfolioItems(portfolioType) {
	return {
		type: REQUEST_PORTFOLIO_ITEMS,
		portfolioType
	};
}

function receivePortfolioItems(portfolioType, items) {
	return {
		type: RECEIVE_PORTFOLIO_ITEMS,
		portfolioType,
		items,
		receivedAt: Date.now()
	};
}

function randomizePortfolioItems(originalObject) {
	// This function converts the keys of the portfolio object into an array, randomizes them, and then returns it back as a new, randomized object with the original values tied to the correct keys.
	const newArrayOfObjectKeys = Object.keys(originalObject);
	newArrayOfObjectKeys.sort(function(a, b) {
		return Math.random() - 0.5;
	});
	const newObject = {};
	newArrayOfObjectKeys.map(key => {
		newObject[key] = originalObject[key];
	});
	return newObject;
}

function fetchPortfolioItems(portfolioType) {
	return dispatch => {
		dispatch(requestPortfolioItems(portfolioType));
		return firebase.database().ref(portfolioType).once('value').then((returnedItems) => {
			dispatch(receivePortfolioItems(portfolioType, randomizePortfolioItems(returnedItems.val())));
		});
	};
}

export const shouldFetchPortfolioItems = (state, portfolioType) => {
	const items = state.itemsByPortfolioType[portfolioType];
	if(!items) {
		return true;
	} else {
		return false;
	}
};

export const fetchPortfolioItemsIfNeeded = (portfolioType) => {
	return (dispatch, getState) => {
		if(shouldFetchPortfolioItems(getState(), portfolioType)) {
			return dispatch(fetchPortfolioItems(portfolioType));
		}
	};
};