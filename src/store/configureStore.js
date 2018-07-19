import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { throttle } from 'lodash';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
	const persistedState = loadState();

	const store = createStore(
		rootReducer,
		persistedState,
		applyMiddleware(thunk)
	);

	store.subscribe(throttle(() => {
		saveState({
			state: store.getState(),
		});
	}, 1000));

	return store;
};

export default configureStore;