import React, { Component } from "react";
import PropTypes from "prop-types";

import Message from "../Message/Message";

import axios from "axios";

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

class MessageList extends Component {
  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/1hiqin")
      .then(response => {
        //sort users by message time
        const messagesFromApi = response.data;

        messagesFromApi.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
        messagesFromApi.map(message => {
          return this.props.addMessage(
            Number(message.id),
            message.user,
            message.avatar,
            message.created_at,
            message.message
          );
        });
        this.props.hideSpinner();
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <ul className="Messages-list" id="message-list">
        {this.props.messages.map(message => (
          <Message
            key={message.id}
            id={message.id}
            user={message.user}
            avatar={message.avatar}
            date={new Date(message.date).toDateString()}
            message={message.message}
            likes={message.likes}
            color={randomColor()}
          />
        ))}
      </ul>
    );
  }
}

export default MessageList;