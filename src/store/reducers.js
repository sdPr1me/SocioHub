const initialAppState = {
  isAuthenticated: false,
  isLoading: true
};
const intitalUserState = {
  userId: "",
  dob: null,
  gender: null,
  emailId: "",
  password: "",
  name: ""
};

export const appStateReducer = (state = initialAppState, action) => {
  let newState = { ...state };
  if (action.type === "USER_AUTHENTICATION_SUCCESS") {
    newState.isLoading = false;
    newState.isAuthenticated = action.payload.isAuthenticated;
  } else if (action.type === "USER_AUTHENTICATION_FAILED") {
    newState.isLoading = true;
    newState.isAuthenticated = false;
  }
  return newState;
};
export const userStateReducer = (state = intitalUserState, action) => {
  let newState = { ...state };
  if (action.type === "USER_DATA_UPDATE") {
    newState = action.payload;
  }
  return newState;
};
