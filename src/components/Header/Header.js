import { Component } from "react";
import React from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>My Chat App</h1>
        <span className="header-lables">online: {this.props.onlineUsers}</span>
        <span className="header-lables">
          messages: {this.props.messagesAmount}
        </span>
        <span className="header-lables">
          last message at: {this.props.lastMessage}
        </span>
      </div>
    );
  }
}

export default Header;
