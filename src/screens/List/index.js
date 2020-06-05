import React from 'react';

import PaperList from '../../components/ShoppingList';
import Totalizer from '../../components/Totalizer';
import HeaderShoppingList from '../../components/HeaderShoppingList';
import {Container} from './styles';

const List = () => {
  return (
    <Container>
      <HeaderShoppingList />
      <PaperList />
      <Totalizer />
    </Container>
  );
};

export default List;
