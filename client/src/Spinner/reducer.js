import { SHOW, HIDE } from "./actionTypes";

const initialState = {
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW: {
      return {
        loading: true
      };
    }

    case HIDE: {
      return {
        loading: false
      };
    }

    default:
      return state;
  }
}
