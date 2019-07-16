import { connect } from "react-redux";
import Input from "./Input";
import { addMessage } from "../../actions/actions";

const mapStateToProps = state => ({
  messages: state
});
const mapDispatchToProps = {
  addMessage
};

export const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
