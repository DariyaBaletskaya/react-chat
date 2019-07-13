import { Component } from "react";
import React from "react";

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>My Chat App</h1>
        <span>online: {this.props.onlineUsers}</span>
      </div>
    );
  }
}

export default Header;
