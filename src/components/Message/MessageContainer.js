import { connect } from "react-redux";
import Message from "./Message";
import { deleteMessage } from "../../actions/actions";

const mapDispatchToProps = dispatch => ({
  dispatchDelete: id => {
    dispatch(deleteMessage(id));
  },
  dispatchLike: id => {
    dispatch(likeMessage(id));
  }
});

export const MessageContainer = connect(
  () => ({}),
  mapDispatchToProps
)(Message);
