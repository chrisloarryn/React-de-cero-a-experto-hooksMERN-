import React, { useContext } from 'react';
import { types } from '../../types/types';
import { AuthContext } from './../../auth/AuthContext';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath');
    const action = {
      type: types.LOGIN,
      payload: {
        name: 'Cristobal'
      }
    };
    dispatch(action);
    history.replace(lastPath);
  };

  /* useEffect(() => {
  Object.keys(user).length > 0 && user.logged === true
    ? history.replace('/')
    : history.replace('/login')
// eslint-disable-next-line
}, [user]) */

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
