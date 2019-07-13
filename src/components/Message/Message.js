import { Component } from "react";
import React from "react";
import LikeButton from "../Buttons/LikeButton";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import "./Message.css";

class Message extends Component {
  state = {
    likesAmount: 0
  };

  render() {
    let content = "";
    let currentDate = new Date();
    let userMessageDate = new Date(this.props.currentMember.created_at);

    if (
      userMessageDate.getMonth() == currentDate.getMonth() &&
      currentDate.getDay() - userMessageDate.getDay() < 1
    ) {
      content = (
        <div>
          <span className="date-separation">Yesterday</span> <hr />
        </div>
      );
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
        <img src={user.avatar} className="avatar" alt="user-avatar" />

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
          <EditButton message={user.message} onEdit={this.onDelete} />
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
