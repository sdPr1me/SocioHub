import { put, takeLatest, call, fork } from "redux-saga/effects";
import { makeApiCall } from "../utils/networkUtil";
import {
  userAuthenticationSuccess,
  userAuthenticationFailed
} from "../actions/authenticationActions";
function* authenticationGenerator() {
  try {
    let deviceId = localStorage.getItem("DEVICE_ID");
    let reqData = { deviceId: deviceId };
    const response = yield call(
      makeApiCall,
      "https://asia-northeast1-sociohub-project.cloudfunctions.net/getAuthentication",
      "options",
      reqData
    );
    let authenticatedStatus = {
      isAuthenticated: response.data.isAuthenticated
    };
    let userId = response.data.userId;
    yield put(userAuthenticationSuccess(authenticatedStatus));
  } catch (error) {
    yield put(userAuthenticationFailed());
  }
}

export function* authenticationWatcher() {
  yield takeLatest("USER_AUTHENTICATION_STARTED", authenticationGenerator);
}
