import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return [{ ...state, isLogged: action.result }];
    default:
      return state;
  }
}
