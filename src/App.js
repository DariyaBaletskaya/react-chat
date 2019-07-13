import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Message from "./components/Message";
import Input from "./components/Input";
import Header from "./components/Header";

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

class App extends Component {
  state = {
    users: [],
    loading: true,
    editText: ""
  };

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/1hiqin")
      .then(response => {
        const users = response.data;
        users.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        this.setState({
          users,
          loading: false
        });
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
        <ul className="Messages-list">
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
        <Header onlineUsers={this.state.users.length} />
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
    this.setState({ users });
  };
}

export default App;
