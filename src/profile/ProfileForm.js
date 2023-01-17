import { useRef, useContext } from "react";
// import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  // const history = useHistory();
  const newNameInputRef = useRef();
  const newDescriptionInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const testSubmitHandler = (event) => {
    event.preventDefault();
    const enteredNewName = newNameInputRef.current.value;
    const enteredNewDescription = newDescriptionInputRef.current.value;
    console.log(
      JSON.stringify({
        idToken: authCtx.token,
        newName: enteredNewName,
        newDescription: enteredNewDescription,
      })
    );
  };
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   // const enteredNewPassword = newPasswordInputRef.current.value;

  //   fetch(
  //     "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBhAS0OkXlVaxC4KPU_pJomTO7CqWmnZII",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         idToken: authCtx.token,
  //         // password: enteredNewPassword,
  //         returnSecureToken: false,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   ).then((res) => {
  //     //assume always succeeds!
  //     history.replace("/");
  //   });
  // };
  return (
    <form
      className={classes.form}
      onSubmit={testSubmitHandler}
      autoComplete="off"
    >
      <div className={classes.control}>
        <label htmlFor="new-name">姓名</label>
        <input type="text" id="inputNmae" ref={newNameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="new-description">简介</label>
        <input type="text" id="inputDescription" ref={newDescriptionInputRef} />
      </div>
      <div className={classes.action}>
        <button>更新</button>
      </div>
    </form>
  );
};

export default ProfileForm;
