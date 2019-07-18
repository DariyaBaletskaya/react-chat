import React from "react";
import { connect } from "react-redux";
import { deleteMessage, likeMessage } from "../MessageList/actions";
import { showPage, setCurrentMessageId } from "../MessageModal/actions";

import "./Message.css";

const Message = props => {
  const onDelete = id => {
    props.deleteMessage(props.id);
  };
  const onLike = id => {
    props.likeMessage(props.id);
  };
  const onEdit = id => {
    props.setCurrentMessageId(props.id);
    props.showPage();
  };

  const messageFromMe = props.fromCurrentUser;
  console.log(messageFromMe);
  const className = messageFromMe
    ? "Messages-message currentMember"
    : "Messages-message";
  return (
    <li className={className}>
      <img src={props.avatar} className="avatar" alt="user-avatar" />

      <div className="Message-content">
        <div className="username">{props.user}</div>
        <span className="date">{props.date}</span>
        <div className="text" style={{ backgroundColor: props.color }}>
          {props.message}
        </div>
        <button className="like-btn" onClick={onLike}>
          <span role="img" aria-label="emoji">
            &#x1F497;
          </span>
          {props.likes}
        </button>

        <button className="user-btn" onClick={onDelete}>
          <span role="img" aria-label="emoji">
            &#x274C;
          </span>
        </button>

        <button className="user-btn" onClick={onEdit}>
          <span role="img" aria-label="emoji">
            &#x270D;
          </span>
        </button>
      </div>
    </li>
  );
};

const mapStateToProps = state => ({
  messages: state.messages,
  isShown: state.messageModal.isShown
});
const mapDispatchToProps = {
  deleteMessage,
  likeMessage,
  showPage,
  setCurrentMessageId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
