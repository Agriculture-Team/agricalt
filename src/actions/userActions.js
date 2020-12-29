import * as types from "./actionTypes";
import * as userService from "../../src/services/userServices";

export function loginSuccess(result) {
  return { type: types.LOGIN_SUCCESS, result };
}

export function loginUser(userName, password) {
  return function (dispatch) {
    return userService
      .loginUser(userName, password)
      .then((result) => {
        dispatch(loginSuccess(result));
      })
      .catch((error) => {
        throw error;
      });
  };
}
