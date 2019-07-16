import * as types from "../components/MessageList/actionTypes";

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return state.concat([
        {
          id: action.id,
          user: action.user,
          avatar: action.avatar,
          date: action.date,
          message: action.message,
          likes: action.likes
        }
      ]);

    case types.DELETE_MESSAGE:
      let fileteredMessages = state.filter(message => message.id !== action.id);
      return fileteredMessages;
    case types.LIKE_MESSAGE:
      let likedMessages = state.map(message => {
        if (message.id === action.id) {
          message.likes++;
        }
        return message;
      });

      return likedMessages;
    case types.EDIT_MESSAGE:
      let editedMessages = state.map(message => {
        if (message.id === action.id) {
          message.message = action.data.message;
        }
        return message;
      });
      return editedMessages;
    default:
      return state;
  }
};

export default messages;
