import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ShowAddItem} from '../../Store/ListStore';

import PaperList from '../../components/ShoppingList';
import Totalizer from '../../components/Totalizer';
import HeaderShoppingList from '../../components/HeaderShoppingList';
import Modal from '../../components/Modal';
import ModalAddItem from '../../components/ModalAddItem';
import {Container} from './styles';

const List = () => {
  const dispatch = useDispatch();
  const listStore = useSelector((state) => state.listStore);

  return (
    <Container>
      <Modal
        visible={listStore.showAddItem}
        onClose={() => {
          dispatch(ShowAddItem(false));
        }}>
        <ModalAddItem />
      </Modal>
      <HeaderShoppingList />
      <PaperList />
      <Totalizer />
    </Container>
  );
};

export default List;
