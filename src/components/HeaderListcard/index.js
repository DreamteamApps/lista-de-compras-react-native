import React, {useState} from 'react';
import {
  TouchContainer,
  TitleContainer,
  Container,
  ButtonIcon,
  Text,
  ButtonContainer,
} from './stytes';
import ModalAddList from './../ModalAddList/index';
import ModalRate from './../ModalRate';
import rate from '../../../assets/images/rate.png';

import {showModal} from '../../store/ModalStore';
import createList from '../../../assets/images/create-list.png';
import {useDispatch} from 'react-redux';

const modalAdd = <ModalAddList title="Nova lista" />;
const modalRate = <ModalRate />;


const HeaderListCard = () => {
  const dispath = useDispatch();
  return (
    <Container>
      <TitleContainer>
        <Text numberOfLines={1}>Minhas Listas</Text>
      </TitleContainer>
      <ButtonContainer>
        <TouchContainer onPress={() => dispath(showModal(true, modalRate))}>
          <ButtonIcon source={rate} resizeMode="contain" />
        </TouchContainer>
        <TouchContainer onPress={() => dispath(showModal(true, modalAdd))}>
          <ButtonIcon source={createList} resizeMode="contain" />
        </TouchContainer>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderListCard;
