export function selectPortfolioType(portfolioType) {
	return {
		type: SELECT_PORTFOLIO_TYPE,
		portfolioType
	}
}

export function invalidatePortfolioType(portfolioType) {
	return {
		type: INVALIDATE_PORTFOLIO_TYPE,
		portfolioType
	}
}

function requestPortfolioItems(portfolioType) {
	return {
		type: REQUEST_PORTFOLIO_ITEMS,
		portfolioType
	}
}

function receivePortfolioItems(portfolioType, json) {
	return {
		type: RECEIVE_PORTFOLIO_ITEMS,
		portfolioType,
		items: json.data.children.map(child => child.data),
		receivedAt: Date.now()
	}
}

function fetchPortfolioItems(portfolioType) {
	return dispatch => {
		dispatch(requestPortfolioItems(portfolioType));
		// return fetch(`https://www.reddit.com/r/${portfolioType}.json`)
		// 	.then(response => response.json())
		// 	.then(json => dispatch(receivePortfolioItems(portfolioType, json)));
	}
}

export const shouldFetchPortfolioItems = (state, portfolioType) => {
	const items = state.itemsByPortfolioType[portfolioType];
	if(!items) {
		return true;
	} else if(items.isFetching) {
		return false;
	} else {
		return items.didInvalidate;
	}
}

export const fetchPortfolioItemsIfNeeded = (portfolioType) => {
	return (dispatch, getState) => {
		if(shouldFetchPortfolioItems(getState(), portfolioType)) {
			return dispatch(fetchPortfolioItems(portfolioType));
		}
	}
};