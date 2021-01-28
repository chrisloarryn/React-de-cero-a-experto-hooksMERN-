import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
}

if (process.env.NODE_ENV !== 'test')
  Object.assign(firebaseConfig, {
    databaseURL: process.env.REACT_APP_databaseURL
  })

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider() // GithubAuthProvider();

export { db, googleAuthProvider, firebase }
