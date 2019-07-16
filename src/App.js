import React, { Component } from "react";
import { MessageListContainer } from "./components/MessageList/MessageListContainer";
import { InputContainer } from "./components/Input/InputContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import MessageModal from "./components/MessageModal";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <MessageListContainer />
        <InputContainer />
        <MessageModal />
      </div>
    );
  }
}

export default App;
