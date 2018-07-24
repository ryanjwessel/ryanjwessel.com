import {
	UPDATE_USER_STATUS
} from '../actions';

const initialState = {
	loggedIn: false,
};

export function userStatus(state = initialState, action) {
	switch (action.type) {
	case UPDATE_USER_STATUS:
		return {
			loggedIn: action.loggedIn
		};
	default:
		return state;
	}
}