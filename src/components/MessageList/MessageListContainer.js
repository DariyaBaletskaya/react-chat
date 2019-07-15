import { connect } from "react-redux";
import MessageList from "./MessageList";
import { addMessage, likeMessage } from "../../actions/actions";

const mapDispatchToProps = dispatch => ({
  dispatchAdd: (id, user, avatar, date, message) => {
    dispatch(addMessage(id, user, avatar, date, message));
  },
  dispatchLike: id => {
    dispatch(likeMessage(id));
  }
});

export const MessageListContainer = connect(
  state => ({
    messages: state
  }),
  mapDispatchToProps
)(MessageList);
