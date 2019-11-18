import { all, fork } from "redux-saga/effects";

import { signUpWatcher } from "./SignUpSaga";
import { authenticationWatcher } from "./authenticationSaga";

export default function* rootSaga() {
  yield all([fork(authenticationWatcher), fork(signUpWatcher)]);
}
