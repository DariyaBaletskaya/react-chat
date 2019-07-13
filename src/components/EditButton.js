import { Component } from "react";
import React from "react";

class EditButton extends Component {
  onClick = e => {
    this.props.onLike();
  };
  render() {
    return <button className="user-btn"> &#x270D;</button>;
  }
}

export default EditButton;
