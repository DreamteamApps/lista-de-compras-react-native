import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import listStore from './ListStore';

const reducers = combineReducers({
  listStore,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
