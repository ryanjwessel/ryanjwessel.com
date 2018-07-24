import {
	combineReducers
} from 'redux';
import {
	itemsByPortfolioType,
	selectedPortfolioType
} from './portfolio';

const rootReducer = combineReducers({
	itemsByPortfolioType,
	selectedPortfolioType
});

export default rootReducer;