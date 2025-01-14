import { Component } from "react";
import React from "react";
import "./Input.css";

class Input extends Component {
  state = {
    text: ""
  };

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            id="msg-input"
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Type your message and press ENTER"
            autoFocus={true}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
