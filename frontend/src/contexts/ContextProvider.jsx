import { createContext, useState, useContext } from "react";

const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
    notification: null,
    setNotification: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, _setToken] = useState(localStorage.getItem("AccessToken"));
    const [notification, _setNotification] = useState('');

    const setNotification = (message) => {
        _setNotification(message);
        setTimeout(() => {
            _setNotification('');
        }, 5000);
    };

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("AccessToken", token);
        } else {
            localStorage.removeItem("AccessToken");
        }
    };

    return (
        <stateContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                notification,
                setNotification,
            }}
        >
            {children}
        </stateContext.Provider>
    );
};

export const useStateContext = () => useContext(stateContext);
