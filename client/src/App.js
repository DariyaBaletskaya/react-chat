import React from "react";
import Spinner from "./Spinner/Spinner";
import UserList from "./users/index";
import UserPage from "./userPage/index";
import LoginPage from "./LoginPage/loginPage";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Spinner />
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/dashboard" component={UserList} />
        <Route path="/user" component={UserPage} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
