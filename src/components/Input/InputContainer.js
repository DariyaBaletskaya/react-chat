import { connect } from "react-redux";
import Input from "./Input";
import { addMessage } from "../../actions/actions";

const mapDispatchToProps = dispatch => ({
  dispatch: (id, user, avatar, date, message) => {
    dispatch(addMessage(id, user, avatar, date, message));
  }
});

export const InputContainer = connect(
  () => ({}),
  mapDispatchToProps
)(Input);
