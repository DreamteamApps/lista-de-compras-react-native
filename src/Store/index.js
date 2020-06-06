import {createStore, combineReducers} from 'redux';
import {persistStore} from 'redux-persist';

import listStore from './ListStore';
import modalStore from './ModalStore';

const reducers = combineReducers({
  listStore,
  modalStore,
});

export const store = createStore(reducers);
export const persistor = persistStore(store);
