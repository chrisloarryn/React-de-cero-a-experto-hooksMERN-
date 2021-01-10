import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { noteLogout } from './notes';
import { finishLoading, setError, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch(({ message }) => {
        dispatch(setError(message));
        Swal.fire('Error', message, 'error');
        dispatch(finishLoading());
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch(({ message }) => {
        dispatch(setError(message));
        Swal.fire('Error', message, 'error');
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch(({ message }) => {
        dispatch(setError(message));
        Swal.fire('Error', message, 'error');
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.LOGIN,
  payload: {
    uid,
    displayName
  }
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logout());
        dispatch(noteLogout());
      })
      .catch(({ message }) => {
        dispatch(setError(message));
        Swal.fire('Error', message, 'error');
      });
  };
};

export const logout = () => ({
  type: types.LOGOUT
});
