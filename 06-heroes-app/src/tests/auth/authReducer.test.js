import { authReducer } from 'auth/authReducer';
import { types } from 'types/types';

describe('Tests in authReducer', () => {
  const status = { name: 'Juan', logged: true };
  const defaultStatus = { logged: false };
  test('Should return default status', () => {
    const state = authReducer(defaultStatus, {});
    expect(state).toBe(defaultStatus);
  });
  test('Should authenticate and put name of user', () => {
    const action = {
      type: types.LOGIN,
      payload: {
        name: 'Juan'
      }
    };
    const state = authReducer(defaultStatus, action);
    expect(state).toEqual(status);
  });
  test('Should delete name of user and logged in false', () => {
    const action = {
      type: types.LOGOUT
    };
    const state = authReducer(status, action);
    expect(state).toEqual(defaultStatus);
  });
});
