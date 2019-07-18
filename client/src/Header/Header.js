import React from "react";
import "./Header.css";

const Header = ({ messages }) => {
  let lastMsgDate = "00:00";

  if (messages.length > 0) {
    lastMsgDate = `${messages[messages.length - 1].date}`;
  }
  return (
    <div className="App-header">
      <h1>My Chat App</h1>
      <span className="header-lables">online: {messages.length}</span>
      <span className="header-lables">messages: {messages.length}</span>
      <span className="header-lables">last message: {lastMsgDate}</span>
    </div>
  );
};

export default Header;
