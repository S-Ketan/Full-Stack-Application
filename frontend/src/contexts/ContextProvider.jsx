import { createContext, useState, useContext} from "react";

const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("token"));

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    };
    <stateContext.Provider values={{ user, setUser, token, setToken }}>
        {children}
    </stateContext.Provider>;
};

const useStateContext = () => useContext(stateContext);

export default useStateContext;