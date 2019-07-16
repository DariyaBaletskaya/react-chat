import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMessage, likeMessage } from "../MessageList/actions";
import { showPage, setCurrentMessageId } from "../MessageModal/actions";
import PropTypes from "prop-types";

import "./Message.css";

class Message extends Component {
  onDelete = id => {
    this.props.deleteMessage(id);
  };
  onLike = id => {
    this.props.likeMessage(id);
  };
  onEdit = id => {
    this.props.setCurrentMessageId(id);
    this.props.showPage();
  };
  render() {
    const messageFromMe = this.props.id === 0;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li className={className}>
        <img src={this.props.avatar} className="avatar" alt="user-avatar" />

        <div className="Message-content">
          <div className="username">{this.props.user}</div>
          <span className="date">{this.props.date}</span>
          <div className="text" style={{ backgroundColor: this.props.color }}>
            {this.props.message}
          </div>
          <button
            className="like-btn"
            onClick={e => {
              this.onLike(this.props.id);
            }}
          >
            <span role="img" aria-label="emoji">
              &#x1F497;
            </span>
            {this.props.likes}
          </button>

          <button
            className="user-btn"
            onClick={e => {
              this.onDelete(this.props.id);
            }}
          >
            <span role="img" aria-label="emoji">
              &#x274C;
            </span>
          </button>

          <button
            className="user-btn"
            onClick={e => {
              this.onEdit(this.props.id);
            }}
          >
            <span role="img" aria-label="emoji">
              &#x270D;
            </span>
          </button>
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  isShown: state.modal.isShown
});
const mapDispatchToProps = {
  deleteMessage,
  likeMessage,
  showPage,
  setCurrentMessageId
};

Message.PropTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
