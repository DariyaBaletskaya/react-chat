import { all } from "redux-saga/effects";
import userPageSagas from "../userPage/sagas";
import usersSagas from "../users/sagas";
import loginPageSagas from "../LoginPage/loginPageSagas";

export default function* rootSaga() {
  yield all([userPageSagas(), usersSagas(), loginPageSagas()]);
}
