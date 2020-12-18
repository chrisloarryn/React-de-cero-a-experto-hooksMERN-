import React, { useEffect, useReducer } from 'react';
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';

import AppRouter from './routers/AppRouter';

const init = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    Object.keys(user).length > 0 &&
      localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
