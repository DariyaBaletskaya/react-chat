import { Component } from "react";
import React from "react";
import LikeButton from "./LikeButton";
import EditButton from "./EditButton";
import DeleteButton from "../DeleteButton";

class Message extends Component {
  state = {
    likesAmount: 0
  };

  render() {
    let content = "";
    if (
      new Date(this.props.currentMember).getMonth() == new Date().getMonth() &&
      new Date(this.props.currentMember).getDay() != new Date().getDay()
    ) {
      content = <h1>Yesterday</h1>;
    }
    return (
      <div>
        {content}
        {this.renderMessage(this.props.currentMember)}
      </div>
    );
  }

  onClick(e, id) {
    e.preventDefault();
    this.props.onLike(id);
  }

  renderMessage(user) {
    // const { member, text } = message;
    // const { currentMember } = this.props;
    const messageFromMe = user.id === "CURRENT";
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li className={className} id={user.created_at}>
        <img src={user.avatar} className="avatar" />

        <div className="Message-content">
          <div className="username">{user.user}</div>
          <span className="date">{`${new Date(
            user.created_at
          ).toDateString()}`}</span>
          <div className="text" style={{ backgroundColor: this.props.color }}>
            {user.message}
          </div>

          <LikeButton
            likesAmount={this.state.likesAmount}
            onLike={this.onLike}
          />
          <EditButton />
          <DeleteButton onDelete={this.onDelete} />
        </div>
      </li>
    );
  }

  onDelete = () => {
    document.getElementById(this.props.currentMember.created_at).style.display =
      "none";
  };
  onLike = () => {
    let likesAmount = this.state.likesAmount;
    likesAmount++;
    this.setState({ likesAmount });
  };
}

export default Message;
