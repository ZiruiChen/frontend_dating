import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";


const {REACT_APP_IP_ADDRESS, REACT_APP_PORT} = process.env;

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    // setIsLogin((prevState) => !prevState);
  };

  



  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
      `https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/user/login`
      console.log(url)
        // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhAS0OkXlVaxC4KPU_pJomTO7CqWmnZII";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhAS0OkXlVaxC4KPU_pJomTO7CqWmnZII";
    }


    fetch(url, {   
      method: "POST",
      // body: JSON.stringify({
      //   email: enteredEmail,
      //   password: enteredPassword,
      //   returnSecureToken: true,
      // }),
      body: JSON.stringify({
        telephone: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
    })
      .then((res) => {
        setIsLoading(false);
        console.log("response is below")
        console.log(res);
        if (res.ok) {
          //...success response
          console.log("success response");
          return res.json();
        } else {
          console.log("unsuccess response");
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then(console.log("before replace"))
      .then((data) => {
        console.log("this is the data section")
        console.log(data.data);
        authCtx.login(data.data);
        history.replace("/candidates");
      })
      .catch((err) => {
        console.log("catch error")
        alert(err.message);
        setIsLoading(false);
      });
  };



  return (
    <section className={classes.auth}>

      <h1>{isLogin ? "登录" : "注册"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="text">邮箱</label>
          <input type="text" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "登录" : "创建账号"}</button>
          )}
          {isLoading && <p>Sending request</p>}
          {/* <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "创建新账号" : "使用已有账号登录"}
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
