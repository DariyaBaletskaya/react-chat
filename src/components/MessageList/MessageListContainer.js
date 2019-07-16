import { connect } from "react-redux";
import MessageList from "./MessageList";
import { addMessage } from "../../actions/actions";

const mapStateToProps = state => ({
  messages: state
});
const mapDispatchToProps = {
  addMessage
};

export const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
