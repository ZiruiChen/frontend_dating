import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const initialEmail = localStorage.getItem('email')

  // console.log(initialToken.idToken);
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const loginHandler = (data) => {
    setToken(data.idToken);
    setEmail(data.email)
    localStorage.setItem('token', data.idToken);
    localStorage.setItem('email', data.email);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  };

  const contextValue = {
    email: email,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
