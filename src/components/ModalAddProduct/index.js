import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AddProduct, RemoveProduct} from '../../store/ListStore';
import {
  Container,
  ProductInputContainer,
  ProductInput,
  Title,
  ValueContainer,
  AddButtonContainer,
  DeleteButtonContainer,
  ButtonIcon,
  ButtonContainer,
  ValueItemContainer,
  ModalTitle,
  ModalTitleContainer,
} from './styles';
import {showModal} from '../../store/ModalStore';
import cartIcon from '../../../assets/images/cart.png';
import deleteIcon from '../../../assets/images/delete.png';
import uuid from 'uuid-js';

const ModalAddProduct = ({product, title, onClose, canDelete}) => {
  const dispatch = useDispatch();

  product = product ?? {
    id: uuid.create().toString(),
    check: false,
  };

  const [name, setName] = useState(product.name ?? '');
  const [quantity, setQunatity] = useState(`${product.quantity ?? 1}`);
  const [price, setPrice] = useState(
    `${product.price > 0 ? product.price : ''}`,
  );
  const canAdd = !!(name && quantity);

  function onAddItem() {
    dispatch(
      AddProduct({
        ...product,
        name,
        price: Number(price.replace(',', '.')),
        quantity: Number(quantity.replace(',', '.')),
      }),
    );
    dispatch(showModal(false));
  }

  function onDeleteItem() {
    dispatch(RemoveProduct(product.id));
    dispatch(showModal(false));
  }

  return (
    <Container>
      <ModalTitleContainer>
        <ModalTitle>{title}</ModalTitle>
      </ModalTitleContainer>
      <Title>Produto</Title>
      <ProductInputContainer>
        <ProductInput
          placeholder="Nome do produto"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </ProductInputContainer>
      <ValueContainer>
        <ValueItemContainer>
          <Title>Quantidade</Title>
          <ProductInputContainer>
            <ProductInput
              keyboardType={'number-pad'}
              placeholder="1"
              value={quantity}
              onChangeText={(text) => setQunatity(text)}
            />
          </ProductInputContainer>
        </ValueItemContainer>
        <ValueItemContainer>
          <Title>Preço unitário</Title>
          <ProductInputContainer>
            <ProductInput
              keyboardType={'number-pad'}
              placeholder="0.00"
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </ProductInputContainer>
        </ValueItemContainer>
      </ValueContainer>
      <ButtonContainer enable={canAdd}>
        {canDelete && (
          <DeleteButtonContainer disabled={!canAdd} onPress={onDeleteItem}>
            <ButtonIcon source={deleteIcon} resizeMode="contain" />
          </DeleteButtonContainer>
        )}
        <AddButtonContainer onPress={onAddItem}>
          <ButtonIcon source={cartIcon} resizeMode="contain" />
        </AddButtonContainer>
      </ButtonContainer>
    </Container>
  );
};

export default ModalAddProduct;
