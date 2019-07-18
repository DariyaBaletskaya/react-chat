import { FETCH_USERS_SUCCESS } from "./actionTypes";

const initialState = [
  {
    id: 0,
    name: "admin",
    surname: "admin",
    email: "admin@gmail.com",
    password: "admin"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      return [...action.payload.users];
    }

    default:
      return state;
  }
}
