import { connect } from "react-redux";
import MessageList from "./MessageList";
import { addMessage } from "./actions";
import { hideSpinner } from "../Spinner/actions";

const mapStateToProps = state => ({
  messages: state.messages
});
const mapDispatchToProps = {
  addMessage,
  hideSpinner
};

export const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
