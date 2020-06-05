import React from 'react';
import {ShowAddList} from '../../Store/ListStore';

import {useDispatch} from 'react-redux';
import {
  TouchContainer,
  TitleContainer,
  Container,
  ButtonIcon,
  Text,
  ButtonContainer,
} from './stytes';
import createList from '../../../assets/images/create-list.png';

const HeaderListCard = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <TitleContainer>
        <Text numberOfLines={1}>Minhas Listas</Text>
      </TitleContainer>
      <ButtonContainer>
        <TouchContainer
          onPress={() => dispatch(ShowAddList(true, null, 'NEW'))}>
          <ButtonIcon source={createList} resizeMode="contain" />
        </TouchContainer>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderListCard;
