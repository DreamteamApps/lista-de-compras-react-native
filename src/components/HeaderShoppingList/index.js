import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  TouchContainer,
  TouchContainerWithBg,
  TitleContainer,
  Container,
  ButtonIcon,
  Text,
  ButtonContainer,
  BackIcon,
} from './stytes';
import ModalAddProduct from './../ModalAddProduct/index';
import {showModal} from '../../store/ModalStore';

import cartIcon from '../../../assets/images/cart.png';
import backIcon from '../../../assets/images/back.png';

const modalAdd = <ModalAddProduct title="Nova lista" />;

const HeaderShoppingList = () => {
  const navigation = useNavigation();
  const selectedList = useSelector((state) => state.listStore.selectedList);
  const dispath = useDispatch();
  return (
    <Container>
      <TouchContainer onPress={() => navigation.goBack()}>
        <BackIcon source={backIcon} resizeMode="contain" />
      </TouchContainer>
      <TitleContainer>
        <Text numberOfLines={1}>{selectedList.name}</Text>
      </TitleContainer>
      <ButtonContainer>
        <TouchContainerWithBg
          onPress={() => dispath(showModal(true, modalAdd))}>
          <ButtonIcon source={cartIcon} resizeMode="contain" />
        </TouchContainerWithBg>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderShoppingList;
