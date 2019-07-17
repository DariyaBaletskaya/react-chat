import { combineReducers } from "redux";
import users from "../users/reducer";

import userPage from "../userPage/reducer";
import spinner from "../Spinner/reducer";
import messages from "../MessageList/reducer";
import messageModal from "../MessageModal/reducer";

const rootReducer = combineReducers({
  users,
  userPage,
  spinner,
  messages,
  messageModal
});

export default rootReducer;
