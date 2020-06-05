import React from 'react';
import PaperListItem from '../ShoppingListItem';
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
      renderItem={({item}) => (
        <PaperListItem
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          check={item.check}
        />
      )}
      keyExtractor={(item) => item.id}>
      />
    </PaperFlatList>
  );
};

export default PaperList;
