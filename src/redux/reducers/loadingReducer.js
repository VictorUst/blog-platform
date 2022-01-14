import { LOADING } from '../actions/loadingActions';

const initialState = {
  isLoading: true,
}

const loadingReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOADING:
      return {...state, isLoading: payload};
    default:
      return state;
  }
};

export default loadingReducer;