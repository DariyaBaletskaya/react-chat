import * as types from "./actionTypes";

let nextMessageId = 0;

export const addMessage = (
  id = nextMessageId++,
  user,
  avatar,
  date,
  message,
  likes = 0,
  fromCurrentUser = false
) => ({
  type: types.ADD_MESSAGE,
  id,
  user,
  avatar,
  date,
  message,
  likes,
  fromCurrentUser
});

export const deleteMessage = id => ({
  type: types.DELETE_MESSAGE,
  id
});

export const likeMessage = id => ({
  type: types.LIKE_MESSAGE,
  id
});

export const updateMessage = (id, data) => ({
  type: types.EDIT_MESSAGE,
  id,
  data
});
