import * as types from "./actionTypes";

export const loginUserAction = user => {
  return {
    type: types.LOGIN_USER,
    user
  };
};
