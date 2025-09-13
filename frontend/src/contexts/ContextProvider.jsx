import { createContext, useState, useContext } from "react";

const stateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState('hello' );

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };

  // ✅ Must RETURN JSX and use 'value'
  return (
    <stateContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
