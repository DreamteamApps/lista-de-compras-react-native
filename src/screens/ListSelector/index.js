import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MyListsHeader from '../../components/HeaderListcard';
import ListCard from '../../components/ListCard';
import Modal from '../../components/Modal';
import ModalAddList from '../../components/ModalAddList';
import ModalCloneList from '../../components/ModalCloneList';

import {Container} from './styles';
import {ShowAddList, ShowCloneList} from '../../Store/ListStore';

const ListSelector = () => {
  const dispatch = useDispatch();
  const listStore = useSelector((state) => state.listStore);

  return (
    <Container>
      <MyListsHeader />
      <Modal
        visible={listStore.showAddList}
        onClose={() => {
          dispatch(ShowAddList(false));
        }}>
        <ModalAddList />
      </Modal>
      <Modal
        visible={listStore.showCloneList}
        onClose={() => dispatch(ShowCloneList(false))}>
        <ModalCloneList />
      </Modal>
      <ListCard />
    </Container>
  );
};

export default ListSelector;
