import React from 'react';
export const Types = {
  SHOW: 'MODAL/SHOW',
};

const INITIAL_STATE = {
  show: false,
  children: <></>,
};

export function showModal(show, children) {
  console.log('show', show, children);
  return {
    type: Types.SHOW,
    payload: {
      show,
      children,
    },
  };
}
function _showModal(state, payload) {
  console.log('payload', payload);
  return {
    ...state,
    show: payload.show,
    children: payload.children ?? <></>,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case Types.SHOW:
      return _showModal(state, payload);
    default:
      return state;
  }
}
