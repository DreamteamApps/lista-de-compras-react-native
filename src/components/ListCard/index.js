import React from 'react';
import ListCardItem from '../ListCardItem';
import {ListCardFlatList} from './styles';

import {useSelector} from 'react-redux';

const flatListStyle = {
  padding: 10,
};

const ListCard = () => {
  const listStore = useSelector((state) => state.listStore);
  return (
    <ListCardFlatList
      contentContainerStyle={flatListStyle}
      horizontal={false}
      data={listStore.allLists}
      numColumns={1}
      renderItem={({item}) => <ListCardItem list={item} />}
      keyExtractor={(item) => item.id}>
      />
    </ListCardFlatList>
  );
};

export default ListCard;
