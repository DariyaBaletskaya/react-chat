import { put, call, takeLatest } from "redux-saga/effects";
import { loginUserService } from "../services/authenticationService";
import * as types from "./actionTypes";

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);

    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
