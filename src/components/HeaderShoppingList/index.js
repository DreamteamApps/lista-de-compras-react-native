import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
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
import Modal from './../Modal/index';
import cartIcon from '../../../assets/images/cart.png';
import backIcon from '../../../assets/images/back.png';

const HeaderShoppingList = () => {
  const navigation = useNavigation();
  const selectedList = useSelector((state) => state.listStore.selectedList);
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <Container>
      <Modal
        visible={showAddProduct}
        onClose={() => {
          setShowAddProduct(false);
        }}>
        <ModalAddProduct
          title="Novo Produto"
          onClose={() => {
            setShowAddProduct(false);
          }}
        />
      </Modal>
      <TouchContainer onPress={() => navigation.goBack()}>
        <BackIcon source={backIcon} resizeMode="contain" />
      </TouchContainer>
      <TitleContainer>
        <Text numberOfLines={1}>{selectedList.name}</Text>
      </TitleContainer>
      <ButtonContainer>
        <TouchContainerWithBg onPress={() => setShowAddProduct(true)}>
          <ButtonIcon source={cartIcon} resizeMode="contain" />
        </TouchContainerWithBg>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderShoppingList;
