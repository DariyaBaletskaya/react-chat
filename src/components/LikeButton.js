import { Component } from "react";
import React from "react";

class LikeButton extends Component {
  onClick = e => {
    this.props.onLike();
  };
  render() {
    return (
      <button className="like-btn" onClick={e => this.onClick(e)}>
        &#x1F497; {this.props.likesAmount}
      </button>
    );
  }
}

export default LikeButton;
