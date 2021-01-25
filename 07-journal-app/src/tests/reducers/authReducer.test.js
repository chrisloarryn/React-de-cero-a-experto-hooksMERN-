import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Tests in authReducer', () => {
  test('should do login', () => {
    const initState = {};
    const action = {
      type: types.LOGIN,
      payload: {
        uid: 'abc',
        displayName: 'Christopher'
      }
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({
      uid: 'abc',
      name: 'Christopher'
    });
  });
  test('should do logout', () => {
    const initState = {
      uid: 'abc',
      name: 'Christopher'
    };
    const action = {
      type: types.LOGOUT
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });
  test(`shouldn't do changes in the state`, () => {
    const initState = {
      uid: 'abc',
      name: 'Christopher'
    };
    const action = {
      type: 'saassaasddas'
    };
    const state = authReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
