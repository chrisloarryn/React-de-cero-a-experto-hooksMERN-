import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { types } from '../../types/types';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from './../../helpers/fileUpload';
import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout
} from '../../actions/auth';

jest.mock('./../../helpers/fileUpload', () => ({
  fileUpload: jest.fn(() => {
    // 'https://hello-world.com/something.jpg'
    return Promise.resolve('https://hello-world.com/something.jpg');
  })
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Test with notes actions', () => {
  beforeEach(async () => {
    store = await mockStore(initState);
  });

  test('tests in Login && Logout', () => {
    const uid = 'ABC123';
    const displayName = 'Christopher';

    const loginAction = login(uid, displayName);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.LOGIN,
      payload: {
        uid,
        displayName
      }
    });
    expect(logoutAction).toEqual({
      type: types.LOGOUT
    });
  });
  test('startLogout should do the action', async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.LOGOUT
    });
    expect(actions[1]).toEqual({
      type: types.NOTES_LOGOUT_CLEANING
    });
  });
  test('should do startLoginEmailPassword', async () => {
    await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'));
    const actions = await store.getActions();
    console.log(actions);
    expect(actions[1]).toEqual({
      type: types.LOGIN,
      payload: {
        uid: '8V8JlgAH5QhUbBm33iOFRz0aMkE3',
        displayName: null
      }
    });
  });
});
