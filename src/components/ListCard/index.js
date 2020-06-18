import React from 'react';
import {useDispatch} from 'react-redux';
import ListCardItem from '../ListCardItem';
import {ListCardFlatList} from './styles';
import {showModal} from '../../store/ModalStore';
import {useSelector} from 'react-redux';
import EmptyList from '../EmptyList';
import ModalAddList from './../ModalAddList/index';
import createList from '../../../assets/images/create-list.png';

const flatListStyle = {
  padding: 10,
};

const modalAdd = <ModalAddList title="Nova lista" />;

const ListCard = () => {
  const listStore = useSelector((state) => state.listStore);
  const dispath = useDispatch();

  return (
    <ListCardFlatList
      ListEmptyComponent={
        <EmptyList
          text={'Crie uma nova lista'}
          action={() => dispath(showModal(true, modalAdd))}
          icon={createList}
        />
      }
      contentContainerStyle={flatListStyle}
      horizontal={false}
      data={listStore.allLists}
      numColumns={1}
      renderItem={({item}) => <ListCardItem list={item} />}
      keyExtractor={(item) => item.id}
      keyboardShouldPersistTaps="always"
    />
  );
};

export default ListCard;
