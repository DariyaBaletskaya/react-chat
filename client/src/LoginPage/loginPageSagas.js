import { fork } from "redux-saga/effects";
import watchUserAuthentication from "./sagas";

export default function* loginPageSagas() {
  yield fork(watchUserAuthentication);
}
