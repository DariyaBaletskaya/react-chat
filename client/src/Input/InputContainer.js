import { connect } from "react-redux";
import Input from "./Input";
import { addMessage } from "../MessageList/actions";

const mapStateToProps = state => ({
  messages: state.messages,
  response: state.login
});
const mapDispatchToProps = {
  addMessage
};

export const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
