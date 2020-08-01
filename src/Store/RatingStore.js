import {AsyncStorage} from 'react-native';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'rateStore',
  storage: AsyncStorage,
};

export const Types = {
  SET_RATED: 'RATING/SET_RATED',
};

const INITIAL_STATE = {
  rated: false,
};

export function setRated() {
  return {
    type: Types.SET_RATED,
    payload: {},
  };
}
function _setRated(state, payload) {
  console.log('payload', payload);
  return {
    ...state,
    rated: true,
  };
}

function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case Types.SET_RATED:
      console.log('rate reducers');
      return _setRated(state, payload);
    default:
      return state;
  }
}

export default persistReducer(persistConfig, reducer);
