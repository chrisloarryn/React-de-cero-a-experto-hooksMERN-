import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyC3KN-DHa1rIaK_CKjW84PPyLZEy0_FmDE',
  authDomain: 'react-redux-app-a1af4.firebaseapp.com',
  projectId: 'react-redux-app-a1af4',
  storageBucket: 'react-redux-app-a1af4.appspot.com',
  messagingSenderId: '548731380173',
  appId: '1:548731380173:web:adda279439419a57f66484'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GithubAuthProvider();

export { db, googleAuthProvider, firebase };
