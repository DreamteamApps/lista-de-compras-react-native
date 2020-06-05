import React from 'react';
import {ShowAddItem} from '../../Store/ListStore';

import {useSelector, useDispatch} from 'react-redux';
import {
  TouchContainerWithBg,
  TitleContainer,
  Container,
  ButtonIcon,
  Text,
  ButtonContainer,
} from './stytes';
import cartIcon from '../../../assets/images/cart.png';

const HeaderShoppingList = () => {
  const selectedList = useSelector((state) => state.listStore.selectedList);
  const dispatch = useDispatch();
  return (
    <Container>
      <TitleContainer>
        <Text numberOfLines={1}>{selectedList.name}</Text>
      </TitleContainer>
      <ButtonContainer>
        <TouchContainerWithBg onPress={() => dispatch(ShowAddItem(true))}>
          <ButtonIcon source={cartIcon} resizeMode="contain" />
        </TouchContainerWithBg>
        {/* <TouchContainer>
          <ButtonIcon source={editIcon} resizeMode="contain" />
        </TouchContainer> */}
      </ButtonContainer>
    </Container>
  );
};

export default HeaderShoppingList;
