import React from 'react';
import ShoppingListProduct from '../ShoppingListProduct';
import {PaperFlatList} from './styles';

import {useSelector} from 'react-redux';

const flatListStyle = {
  padding: 10,
};

const PaperList = () => {
  const listStore = useSelector((state) => state.listStore);
  return (
    <PaperFlatList
      contentContainerStyle={flatListStyle}
      data={listStore.selectedList.products}
      renderItem={({item}) => <ShoppingListProduct product={item} />}
      keyExtractor={(item) => item.id}>
      />
    </PaperFlatList>
  );
};

export default PaperList;
