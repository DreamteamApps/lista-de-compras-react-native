import React from 'react';
import {useDispatch} from 'react-redux';
import {RemoveList} from '../../store/ListStore';
import ModalConfirmation from './../ModalConfirmation';
import {colors} from './../../theme';
import {showModal} from '../../store/ModalStore';

const ModalDeleteList = ({list}) => {
  const dispatch = useDispatch();
  return (
    <ModalConfirmation
      title={'Deletar Lista'}
      content={`Deseja deletar a lista ${list.name}`}
      leftButton={{
        color: colors.money,
        text: 'Deletar',
        action: () => {
          dispatch(RemoveList(list.id));
          dispatch(showModal(false));
        },
      }}
      rightButton={{
        color: colors.paperLine,
        text: 'Cancelar',
        action: () => dispatch(showModal(false)),
      }}
    />
  );
};

export default ModalDeleteList;
