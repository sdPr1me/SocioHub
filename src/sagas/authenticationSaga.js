import { put, takeLatest, call, fork } from "redux-saga/effects";
import { makeApiCall } from "../utils/networkUtil";
import {
  userAuthenticationSuccess,
  userAuthenticationFailed,
  setUserData
} from "../actions/authenticationActions";
function* authenticationGenerator() {
  try {
    let deviceId = localStorage.getItem("DEVICE_ID");
    let reqData = { deviceId: deviceId };
    console.log(reqData);
    const response = yield call(
      makeApiCall,
      "https://asia-northeast1-sociohub-project.cloudfunctions.net/getAuthentication",
      "post",
      reqData
    );
    let authenticatedStatus = {
      isAuthenticated: response.data.isAuthenticated
    };

    yield put(userAuthenticationSuccess(authenticatedStatus));
    if (response.data.isAuthenticated === true) {
      let userData = response.data.userData;
      yield put(setUserData(userData));
    }
  } catch (error) {
    yield put(userAuthenticationFailed());
  }
}

export function* authenticationWatcher() {
  yield takeLatest("USER_AUTHENTICATION_STARTED", authenticationGenerator);
}
