import uuid from 'uuid-js';
import {AsyncStorage} from 'react-native';
import {persistReducer} from 'redux-persist';

export const Types = {
  SELECT_LIST: 'LISTS/SELECT_LIST',
  SHOW_ADD_ITEM: 'LISTS/SHOW_ADD_ITEM',
  SHOW_CLONE_LIST: 'LISTS/SHOW_CLONE_LIST',
  ADD_LIST: 'LISTS/ADD_LIST',
  REMOVE_LIST: 'LISTS/REMOVE_LIST',
  ADD_ITEM: 'LISTS/ADD_ITEM',
  CHECK_ITEM: 'LISTS/CHECK_ITEM',
};

const INITIAL_STATE = {
  allLists: [],
  showAddItem: false,
  showCloneList: false,
  selectedList: null,
  cloneList: null,
  editingItem: null,
};

const persistConfig = {
  key: 'listStore',
  storage: AsyncStorage,
  blacklist: [
    'selectedList',
    'editingItem',
    'showAddItem',
    'showAddList',
    'showCloneList',
  ],
};

export function SelectList(id) {
  return {
    type: Types.SELECT_LIST,
    payload: id,
  };
}
function _SelectList(state, payload) {
  return {
    ...state,
    selectedList: state.allLists.filter((i) => i.id === payload)[0],
  };
}

export function ShowAddItem(value) {
  return {
    type: Types.SHOW_ADD_ITEM,
    payload: {
      show: value,
    },
  };
}
function _ShowAddItem(state, payload) {
  return {
    ...state,
    showAddItem: payload.show,
  };
}

export function ShowCloneList(show, cloneListId) {
  return {
    type: Types.SHOW_CLONE_LIST,
    payload: {
      show,
      cloneListId,
    },
  };
}
function _ShowCloneList(state, payload) {
  let listToClone = null;
  if (payload.cloneListId) {
    listToClone = state.allLists.filter((i) => i.id === payload.cloneListId)[0];
    listToClone = {
      ...listToClone,
      id: uuid.create().toString(),
      name: `${listToClone.name} Clone`,
    };
  }
  return {
    ...state,
    showCloneList: payload.show,
    cloneList: listToClone,
  };
}

export function AddList(list) {
  console.ll;
  return {
    type: Types.ADD_LIST,
    payload: list,
  };
}
function _AddList(state, payload) {
  let allLists;
  var existingItem = state.allLists.filter((i) => i.id === payload.id);
  if (existingItem.length > 0) {
    allLists = [...state.allLists];
    const index = state.allLists.indexOf(existingItem[0]);
    allLists[index] = payload;
  } else {
    allLists = [payload, ...state.allLists];
  }
  return {
    ...state,
    allLists,
    selectedList: payload,
  };
}

export function RemoveList(id) {
  return {
    type: Types.REMOVE_LIST,
    payload: {
      id,
    },
  };
}

function _RemoveList(state, payload) {
  let lists = [...state.allLists];
  var existingItem = lists.filter((i) => i.id === payload.id)[0];
  var index = lists.indexOf(existingItem);
  lists.splice(index, 1);
  return {
    ...state,
    allLists: lists,
  };
}

export function AddItem(name, price, quantity) {
  return {
    type: Types.ADD_ITEM,
    payload: {
      id: uuid.create().toString(),
      name,
      price,
      quantity,
    },
  };
}

function _AddItem(state, payload) {
  console.log('payload', payload);
  let selectedList = {...state.selectedList};
  let products = [payload, ...selectedList.products];
  selectedList.products = products;

  let allLists = [...state.allLists];
  const existingList = allLists.filter((i) => i.id === selectedList.id)[0];
  const index = state.allLists.indexOf(existingList);
  allLists[index] = selectedList;

  return {
    ...state,
    allLists,
    selectedList: selectedList,
  };
}

export function CheckItem(id) {
  return {
    type: Types.CHECK_ITEM,
    payload: {
      id,
    },
  };
}
function _CheckItem(state, payload) {
  console.log(payload);
  let selectedList = {...state.selectedList};
  let products = selectedList.products;
  let product = products.filter((i) => i.id === payload.id)[0];
  let productIndex = products.indexOf(product);
  product.check = !product.check;
  products[productIndex] = product;
  console.log(product);
  selectedList.products = products;

  let allLists = [...state.allLists];
  const existingList = allLists.filter((i) => i.id === selectedList.id)[0];
  const index = state.allLists.indexOf(existingList);
  allLists[index] = selectedList;

  return {
    ...state,
    allLists,
    selectedList: selectedList,
  };
}

function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case Types.SELECT_LIST:
      return _SelectList(state, payload);
    case Types.SHOW_ADD_ITEM:
      return _ShowAddItem(state, payload);
    case Types.SHOW_CLONE_LIST:
      return _ShowCloneList(state, payload);
    case Types.ADD_LIST:
      return _AddList(state, payload);
    case Types.REMOVE_LIST:
      return _RemoveList(state, payload);
    case Types.ADD_ITEM:
      return _AddItem(state, payload);
    case Types.CHECK_ITEM:
      return _CheckItem(state, payload);
    default:
      return state;
  }
}

export default persistReducer(persistConfig, reducer);
