import { all } from 'redux-saga/effects';
import userPageSagas from '../userPage/sagas';
import usersSagas from '../users/sagas';

export default function* rootSaga() {
    yield all([
        userPageSagas(),
        usersSagas()
    ])
};