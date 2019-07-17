import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import { updateMessage } from "../MessageList/actions";
import TextInput from "../shared/inputs/text/TextInput";
import messageFormConfig from "../shared/config/messageFormConfig";
import defaultMessageConfig from "../shared/config/defaultMessageConfig";

class MessageModal extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultMessageData();
    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.messageId !== this.props.messageId) {
      const message = this.props.messages.find(
        message => message.id === nextProps.messageId
      );
      this.setState(message);
    }
  }

  onCancel() {
    this.props.dropCurrentMessageId();
    this.props.hidePage();
    this.setState(this.getDefaultMessageData());
  }

  onSave() {
    this.props.updateMessage(this.props.messageId, this.state);
    this.props.dropCurrentMessageId();
    this.props.hidePage();
    this.setState(this.getDefaultMessageData());
  }

  onChangeData(e, keyword) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [keyword]: value
    });
  }

  getDefaultMessageData() {
    return {
      ...defaultMessageConfig
    };
  }

  getInput(data, { label, type, keyword }) {
    switch (type) {
      case "text":
        return (
          <TextInput
            label={label}
            type={type}
            text={data[keyword]}
            keyword={keyword}
            onChange={this.onChangeData}
          />
        );

      default:
        return null;
    }
  }

  getMessageEditPage() {
    const data = this.state;

    return (
      <div
        className="modal"
        style={{ display: "block" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ padding: "5px" }}>
            <div className="modal-header">
              <h5 className="modal-title">Edit message</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.onCancel}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {messageFormConfig.map(item => this.getInput(data, item))}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={this.onCancel}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={this.onSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const isShown = this.props.isShown;
    return isShown ? this.getMessageEditPage() : null;
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    isShown: state.messageModal.isShown,
    messageId: state.messageModal.messageId
  };
};

const mapDispatchToProps = {
  ...actions,
  updateMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModal);
