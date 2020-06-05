import React from 'react';
import MyListsHeader from '../../components/HeaderListcard';
import ListCard from '../../components/ListCard';

import {Container} from './styles';

const ListSelector = () => {
  return (
    <Container>
      <MyListsHeader />
      <ListCard />
    </Container>
  );
};

export default ListSelector;
