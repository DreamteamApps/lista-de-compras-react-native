import {createStore, combineReducers} from 'redux';
import {persistStore} from 'redux-persist';

import listStore from './ListStore';
import modalStore from './ModalStore';
import ratingStore from './RatingStore';

const reducers = combineReducers({
  listStore,
  modalStore,
  ratingStore,
});

export const store = createStore(reducers);
export const persistor = persistStore(store);
