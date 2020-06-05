import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {CheckItem} from '../../Store/ListStore';
import Modal from './../Modal/index';
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
const ShoppingListProduct = ({product}) => {
  const dispatch = useDispatch();
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <Container>
      <Modal
        visible={showAddProduct}
        onClose={() => {
          setShowAddProduct(false);
        }}>
        <ModalAddProduct
          product={product}
          title="Editar Produto"
          onClose={() => {
            setShowAddProduct(false);
          }}
          canDelete={true}
        />
      </Modal>
      <CheckContainer onPress={() => dispatch(CheckItem(product.id))}>
        <CheckBox>[]</CheckBox>
        {product.check && <Check>✓</Check>}
      </CheckContainer>
      <InfoContainer onPress={() => setShowAddProduct(true)}>
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
