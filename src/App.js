import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "./firebase/firebase.config";

//Actions
import { handleFillUserInfoAction } from "./actions/login.action";

//Components
import Home from "./views/Home/Home";
import Favs from "./views/Favs/Favs";
// import Videos from "./views/Videos/Videos";
import Images from "./views/Images/Images";
import NavBar from "./layout/NavBar/NavBar";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

function App() {
  const [ session, setSession ] = useState(false);

  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged(user => {
    if (user?.uid) {
      dispatch(
        handleFillUserInfoAction({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        })
      );
      setSession(true);
    } else {
      setSession(false);
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/login"
          render={() =>
            !session ? (
              <>
                <Login />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/register"
          render={() =>
            !session ? (
              <>
                <Register />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <NavBar>
          <Route
            exact
            path="/"
            render={() =>
              session ? (
                <Home />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route
            exact
            path="/images"
            render={() =>
              session ? (
                <Images />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route
            exact
            path="/favs"
            render={() =>
              session ? (
                <Favs />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

        </NavBar>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
