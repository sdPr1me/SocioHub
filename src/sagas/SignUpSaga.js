import { put, takeLatest, call } from "redux-saga/effects";
import { makeApiCall } from "../utils/networkUtil";
import { userAuthenticationStarted } from "../actions/authenticationActions";
function* signUpGenerator(action) {
  try {
    let deviceId = localStorage.getItem("DEVICE_ID");
    let reqData = {
      name: action.data.name,
      emailId: action.data.emailId,
      password: action.data.password,
      gender: action.data.gender,
      dob: action.data.dob,
      deviceId: deviceId,
    };
    console.log(reqData);
    const response = yield call(
      makeApiCall,
      "https://asia-northeast1-sociohub-project.cloudfunctions.net/signUp",
      "post",
      reqData
    );
    if (response.data === true) {
      yield put(userAuthenticationStarted());
    }
  } catch (error) {
    console.log(error);
  }
}

export function* signUpWatcher() {
  yield takeLatest("SIGN_UP_STARTED", signUpGenerator);
}
