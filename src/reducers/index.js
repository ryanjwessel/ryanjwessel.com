import {
	combineReducers
} from 'redux';
import {
	itemsByPortfolioType,
	selectedPortfolioType
} from './portfolio';
import {
	user
} from './users';

const rootReducer = combineReducers({
	itemsByPortfolioType,
	selectedPortfolioType,
	user
});

export default rootReducer;