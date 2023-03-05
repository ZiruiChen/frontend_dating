import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  id: "",
  manager: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const initialId = localStorage.getItem("id");
  const initialManager = localStorage.getItem("manager");

  // console.log(initialToken.idToken);
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const [id, setId] = useState(initialId);
  const [manager, setManager] = useState(initialManager);

  const userIsLoggedIn = !!token;

  const loginHandler = (data) => {
    // setToken(data.idToken);
    // setEmail(data.email)
    // localStorage.setItem('token', data.idToken);
    // localStorage.setItem('email', data.email);
    setToken(data.token);
    setEmail(data.telephone);
    setId(data.id);
    setManager(data.manager);
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.telephone);
    localStorage.setItem("id", data.id);
    localStorage.setItem("manager", data.manager);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("manager");
  };

  const contextValue = {
    email: email,
    token: token,
    id:id,
    manager:manager,
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
