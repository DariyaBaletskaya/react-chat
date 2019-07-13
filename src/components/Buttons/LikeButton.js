import { Component } from "react";
import React from "react";
import "./Button.css";
class LikeButton extends Component {
  onClick = e => {
    this.props.onLike();
  };
  render() {
    return (
      <button className="like-btn" onClick={e => this.onClick(e)}>
        <span role="img" aria-label="emoji">
          &#x1F497;
        </span>{" "}
        {this.props.likesAmount}
      </button>
    );
  }
}

export default LikeButton;
