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

const modalEdit = (product) => (
  <ModalAddProduct product={product} title="Editar Produto" canDelete={true} />
);

const modalUpdatePrice = (product) => (
  <ModalAddProduct
    product={product}
    title="Savar Preço"
    canDelete={false}
    priceFocus={true}
  />
);
const ShoppingListProduct = ({product}) => {
  const dispatch = useDispatch();
  const onCheckPress = () => {
    if (!product.price && !product.check) {
      dispatch(showModal(true, modalUpdatePrice(product)));
    }
    dispatch(CheckItem(product.id));
  };

  return (
    <Container>
      <CheckContainer onPress={onCheckPress}>
        <CheckBox>[]</CheckBox>
        {product.check && <Check>✓</Check>}
      </CheckContainer>
      <InfoContainer
        onPress={() => dispatch(showModal(true, modalEdit(product)))}>
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
