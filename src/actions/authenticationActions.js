export const userAuthenticationStarted = () => ({
  type: "USER_AUTHENTICATION_STARTED"
});
export const userAuthenticationSuccess = data => ({
  type: "USER_AUTHENTICATION_SUCCESS",
  payload: data
});
export const userAuthenticationFailed = () => ({
  type: "USER_AUTHENTICATION_FAILED"
});
