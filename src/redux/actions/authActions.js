export const LOG_IN_USER = 'LOG_IN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const loginUser = (payload) => ({
    type: LOG_IN_USER,
    payload
  })

export const logoutUser = () => ({
    type: LOG_OUT_USER
  })

