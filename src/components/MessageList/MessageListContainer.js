import { connect } from "react-redux";
import MessageList from "./MessageList";
import { addMessage } from "./actions";

const mapStateToProps = state => ({
  messages: state.messages
});
const mapDispatchToProps = {
  addMessage
};

export const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
