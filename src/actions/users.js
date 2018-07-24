// This import loads the firebase namespace along with all its type information.
import fire from '../firebase';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';

export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

const updateUserStatus = () => {
	return {
		type: 'UPDATE_USER_STATUS',
		loggedIn: true,
	};
};

export const attemptLogin = (user, pass) => {
	return (dispatch) => {
		return fire.auth().signInWithEmailAndPassword(user, pass).then(() => {
			dispatch(updateUserStatus());
		})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if(errorCode === 'auth/wrong-password') {
					alert('Wrong password.');
				} else {
					alert(errorMessage);
				}
				console.log(error);
			});
	};
};