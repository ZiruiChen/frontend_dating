import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import AuthContext from "../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/candidates">
        <div className={classes.logo}>秀才娘</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">登录</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/candidates">主页</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/messages">消息</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">个人资料</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>退出登录</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
