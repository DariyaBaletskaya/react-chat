import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Message from "./components/Message/Message";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

class App extends Component {
  state = {
    users: [],
    loading: true,
    editText: "",
    messagesAmount: 0,
    lastMessage: "00:00"
  };

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/1hiqin")
      .then(response => {
        //sort users by message time
        const users = response.data;
        users.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        this.setState({
          users,
          loading: false
        });

        //get last message time, messages amount and chage state
        let lastMessage = this.getLastMessageDate();

        let messagesAmount = this.countMessagesAmount();
        this.setState({ messagesAmount, lastMessage });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let messageList;
    if (this.state.loading) {
      messageList = (
        <img
          id="spinner"
          src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"
          alt="loading"
        />
      );
    } else {
      messageList = (
        <ul className="Messages-list" id="message-list">
          {this.state.users.map(u => (
            <Message
              color={randomColor()}
              currentMember={u}
              likesAmount={u.likesAmount}
              onLike={this.onLike}
            />
          ))}
        </ul>
      );
    }

    return (
      <div className="App">
        <Header
          onlineUsers={this.state.users.length}
          messagesAmount={this.state.messagesAmount}
          lastMessage={this.state.lastMessage}
        />
        {messageList}
        <Input
          onSendMessage={this.onSendMessage}
          editText={this.state.inputText}
        />
      </div>
    );
  }

  onSendMessage = message => {
    let users = [
      ...this.state.users,
      {
        id: "CURRENT",
        user: "Jhon Doe",
        avatar: "",
        created_at: `${new Date()}`,
        message: message,
        marked_read: false
      }
    ];

    let lastMessage = this.getLastMessageDate();
    let messagesAmount = this.countMessagesAmount();

    this.setState({ users, messagesAmount, lastMessage });
  };

  getLastMessageDate = () => {
    let lastMessageDate = this.state.users[this.state.users.length - 1]
      .created_at;
    let lastMessage = `${new Date(lastMessageDate).getHours()} : ${new Date(
      lastMessageDate
    ).getMinutes()}`;
    return lastMessage;
  };

  countMessagesAmount = () => {
    return document.getElementById("message-list").childNodes.length;
  };
}

export default App;
