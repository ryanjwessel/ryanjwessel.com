// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';
import config from './config';

const fire = firebase.initializeApp(config);

export default fire;