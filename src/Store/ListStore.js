import {AsyncStorage} from 'react-native';
import {persistReducer} from 'redux-persist';

export const Types = {
  SELECT_LIST: 'LISTS/SELECT_LIST',
  SHOW_ADD_ITEM: 'LISTS/SHOW_ADD_ITEM',
  SHOW_CLONE_LIST: 'LISTS/SHOW_CLONE_LIST',
  ADD_LIST: 'LISTS/ADD_LIST',
  REMOVE_LIST: 'LISTS/REMOVE_LIST',
  ADD_PRODUCT: 'LISTS/ADD_PRODUCT',
  REMOVE_PRODUCT: 'LISTS/REMOVE_PRODUCT',

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

export function AddProduct(product) {
  return {
    type: Types.ADD_PRODUCT,
    payload: product,
  };
}
function _AddProduct(state, payload) {
  console.log('payload', payload);
  let selectedList = {...state.selectedList};
  let products = [...selectedList.products];
  let existingProduct = products.filter((i) => i.id === payload.id);
  if (existingProduct.length > 0) {
    const index = products.indexOf(existingProduct[0]);
    products[index] = payload;
  } else {
    products = [payload, ...selectedList.products];
  }
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

export function RemoveProduct(id) {
  return {
    type: Types.REMOVE_PRODUCT,
    payload: {
      id,
    },
  };
}

function _RemoveProduct(state, payload) {
  let products = [...state.selectedList.products];
  var existingProduct = products.filter((i) => i.id === payload.id)[0];
  var index = products.indexOf(existingProduct);
  products.splice(index, 1);
  return {
    ...state,
    selectedList: {...state.selectedList, products},
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
    case Types.ADD_LIST:
      return _AddList(state, payload);
    case Types.REMOVE_LIST:
      return _RemoveList(state, payload);
    case Types.ADD_PRODUCT:
      return _AddProduct(state, payload);
    case Types.CHECK_ITEM:
      return _CheckItem(state, payload);
    case Types.REMOVE_PRODUCT:
      return _RemoveProduct(state, payload);
    default:
      return state;
  }
}

export default persistReducer(persistConfig, reducer);
