import {
  SET_CURRENT_MESSAGE_ID,
  DROP_CURRENT_MESSAGE_ID,
  SHOW_PAGE,
  HIDE_PAGE
} from "../components/MessageModal/actionTypes";

const initialState = {
  messageId: "",
  isShown: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_MESSAGE_ID: {
      return {
        ...state,
        messageId: action.id
      };
    }
    case DROP_CURRENT_MESSAGE_ID: {
      return {
        ...state,
        messageId: ""
      };
    }

    case SHOW_PAGE: {
      return {
        ...state,
        isShown: true
      };
    }

    case HIDE_PAGE: {
      return {
        ...state,
        isShown: false
      };
    }

    default:
      return state;
  }
}
