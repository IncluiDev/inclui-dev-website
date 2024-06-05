import { createContext } from 'react';

import useAuth from './hooks/useAuth.jsx';
const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin,
  } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };