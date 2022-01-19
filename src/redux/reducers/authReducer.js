import {
  LOG_IN_USER,
  LOG_OUT_USER
  } from '../actions/authActions';

const initialState = {
    userData: {},
    isLogin: false
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN_USER:
      return { ...state, userData: payload, isLogin: true };
    case LOG_OUT_USER:
      return {...state, userData: {}, isLogin: false };
    default:
      return state;
  }
}

export default authReducer;