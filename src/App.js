import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import ReactPlayer from "react-player";
import { useContext } from "react";
import Layout from "./Layout/Layout";

import AuthPage from "./pages/AuthPage";
import AuthContext from "./store/auth-context";
import CandidatesPage from "./pages/CandidatesPage";
import ProfilePage from "./pages/ProfilePage";
import dummy from "./dummy";
import dummyMan from "./dummyMan";
import DetailPage from "./pages/DetailPage";
import MessagesPage from "./pages/MessagesPage";
import ManagerPage from "./pages/ManagerPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  const authCtx = useContext(AuthContext);

  const maleUser = authCtx.email === "12334123";
  // console.log(maleUser)

  return (
    <Layout>
      <Switch>
        {/* <Expenses items={expenses} /> */}
        {/* <ReactPlayer url='https://www.bilibili.com/video/BV1PY411x7qg?t=3.1' /> */}
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        {authCtx.isLoggedIn && (
          <Route path="/candidates" exact>
            <CandidatesPage src={maleUser ? dummy : dummyMan} />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/candidates/:id">
            <DetailPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/messages" exact>
            <MessagesPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/manage" exact>
            <ManagerPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/signup" exact>
            <SignUpPage />
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="*">
            <Redirect to="/auth" />
          </Route>
        )}
      </Switch>
    </Layout>
  );
};

export default App;
