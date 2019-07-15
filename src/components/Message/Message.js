import React from "react";
import { connect } from "react-redux";
import { deleteMessage, likeMessage } from "../../actions/actions";
import PropTypes from "prop-types";

import "./Message.css";

const Message = props => {
  return (
    <li className="Messages-message" id={props.id}>
      <img src={props.avatar} className="avatar" alt="user-avatar" />

      <div className="Message-content">
        <div className="username">{props.user}</div>
        <span className="date">{props.date}</span>
        <div className="text" style={{ backgroundColor: props.color }}>
          {props.message}
        </div>
        <button
          className="like-btn"
          onClick={e => props.dispatchLike(props.id)}
        >
          <span role="img" aria-label="emoji">
            &#x1F497;
          </span>
          {props.likes}
        </button>
      </div>
    </li>
  );
};
const mapDispatchToProps = dispatch => ({
  dispatchDelete: id => {
    dispatch(deleteMessage(id));
  },
  dispatchLike: id => {
    dispatch(likeMessage(id));
  }
});

Message.PropTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapDispatchToProps)(Message);
