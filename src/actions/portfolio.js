// This import loads the firebase namespace along with all its type information.
import fire from '../firebase';

// These imports load individual services into the firebase namespace.
import 'firebase/database';

import { updateUserStatus } from './users';

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
	newArrayOfObjectKeys.sort(function() {
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
		return fire.database().ref(portfolioType).once('value').then((returnedItems) => {
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

export const updatePortfolioItems = (newData, currentData) => {
	return dispatch => {
		const updatedData = currentData[newData.section].items[newData.item]; // Get the existing data for this item as an object.
		updatedData[newData.field] = newData.value; // Add desired new field to this object.

		return fire.database().ref(`${newData.section}/${newData.item}`).set(updatedData)
			.then(() => {

			})
			.catch(() => {
				dispatch(updateUserStatus(false));
			});
	};
};