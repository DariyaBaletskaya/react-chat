import { SHOW, HIDE } from "../components/Spinner/actionTypes";

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
