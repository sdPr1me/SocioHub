import axios from "axios";

export const makeApiCall = (url, method, data) => {
  return axios({
    method: method,
    url: url,
    data: data
  });
};
