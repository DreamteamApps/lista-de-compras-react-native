import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MyListsHeader from '../../components/HeaderListcard';
import ListCard from '../../components/ListCard';
import Modal from '../../components/Modal';
import ModalCloneList from '../../components/ModalCloneList';

import {Container} from './styles';
import {ShowCloneList} from '../../Store/ListStore';

const ListSelector = () => {
  const dispatch = useDispatch();
  const listStore = useSelector((state) => state.listStore);

  return (
    <Container>
      <MyListsHeader />
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
