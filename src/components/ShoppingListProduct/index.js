import React from 'react';
import {useDispatch} from 'react-redux';
import {CheckItem} from '../../store/ListStore';
import {showModal} from '../../store/ModalStore';
import ModalAddProduct from './../ModalAddProduct/index';
import {
  Container,
  InfoContainer,
  Multiplier,
  Currency,
  Text,
  Price,
  TitleContainer,
  CheckContainer,
  Check,
  CheckBox,
} from './stytes';

const modalDelete = (product) => (
  <ModalAddProduct product={product} title="Editar Produto" canDelete={true} />
);
const ShoppingListProduct = ({product}) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <CheckContainer onPress={() => dispatch(CheckItem(product.id))}>
        <CheckBox>[]</CheckBox>
        {product.check && <Check>✓</Check>}
      </CheckContainer>
      <InfoContainer
        onPress={() => dispatch(showModal(true, modalDelete(product)))}>
        <TitleContainer>
          <Text numberOfLines={1} maxWidth={'55%'}>
            {product.name}
          </Text>
        </TitleContainer>
        <Price>
          <Currency>R$ </Currency>
          {product.price.toFixed(2)}
          <Multiplier> x{product.quantity}</Multiplier>
        </Price>
      </InfoContainer>
    </Container>
  );
};

export default ShoppingListProduct;
