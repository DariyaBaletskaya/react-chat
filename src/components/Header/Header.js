import React from "react";
import PropTypes from "prop-types";
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

Header.PropTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Header;
