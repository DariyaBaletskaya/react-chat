import React from "react";
import { MessageListContainer } from "./MessageList/MessageListContainer";
import { InputContainer } from "./Input/InputContainer";
import { HeaderContainer } from "./Header/HeaderContainer";
import MessageModal from "./MessageModal";
import Spinner from "./Spinner/Spinner";
import UserList from "./users/index";
import UserPage from "./userPage/index";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <HeaderContainer />
      <Spinner />
      <MessageListContainer />
      <InputContainer />
      <MessageModal /> */}
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/user" component={UserPage} />
        <Route path="/user/:id" component={UserPage} />
      </Switch>
    </div>
  );
}

export default App;
