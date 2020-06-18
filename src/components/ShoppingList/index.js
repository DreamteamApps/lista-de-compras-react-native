import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ShoppingListProduct from '../ShoppingListProduct';
import {PaperFlatList} from './styles';
import EmptyList from '../EmptyList';
import ModalAddProduct from './../ModalAddProduct';
import {showModal} from '../../store/ModalStore';
import cartIcon from '../../../assets/images/cart.png';

const flatListStyle = {
  padding: 10,
};

const modalAdd = <ModalAddProduct title="Novo produto" />;

const PaperList = () => {
  const listStore = useSelector((state) => state.listStore);
  const dispath = useDispatch();

  return (
    <PaperFlatList
      ListEmptyComponent={
        <EmptyList
          text={'Adicione um novo produto'}
          action={() => dispath(showModal(true, modalAdd))}
          icon={cartIcon}
        />
      }
      contentContainerStyle={flatListStyle}
      data={listStore.selectedList.products}
      renderItem={({item}) => <ShoppingListProduct product={item} />}
      keyboardShouldPersistTaps="always"
      keyExtractor={(item) => item.id}
    />
  );
};

export default PaperList;
