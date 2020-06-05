import React from 'react';
import {useDispatch} from 'react-redux';
import {RemoveList} from '../../Store/ListStore';
import ModalConfirmation from './../ModalConfirmation';
import {colors} from './../../theme';

const ModalDeleteList = ({list, onClose}) => {
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
          onClose();
        },
      }}
      rightButton={{
        color: colors.paperLine,
        text: 'Cancelar',
        action: onClose,
      }}
    />
  );
};

export default ModalDeleteList;
