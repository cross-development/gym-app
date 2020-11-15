//Database
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBKnjradyCyESzv1zbqSLhPN4i1mlAQ1vw',
	authDomain: 'gym-app-b9aa7.firebaseapp.com',
	databaseURL: 'https://gym-app-b9aa7.firebaseio.com',
	projectId: 'gym-app-b9aa7',
	storageBucket: 'gym-app-b9aa7.appspot.com',
	messagingSenderId: '178585457708',
	appId: '1:178585457708:web:dd9bce5df8b12191796d89',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
