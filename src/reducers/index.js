import {
	combineReducers
} from 'redux';
import {
	itemsByPortfolioType,
	selectedPortfolioType
} from './portfolio';
import {
	userStatus
} from './users';

const rootReducer = combineReducers({
	itemsByPortfolioType,
	selectedPortfolioType,
	userStatus
});

export default rootReducer;