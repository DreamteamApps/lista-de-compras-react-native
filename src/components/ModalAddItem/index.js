import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AddItem, ShowAddItem} from '../../Store/ListStore';
import {
  Container,
  ProductInputContainer,
  ProductInput,
  Title,
  ValueContainer,
  AddButtonContainer,
  AddButtonIcon,
  ButtonContainer,
  ValueItemContainer,
  ModalTitle,
  ModalTitleContainer,
} from './styles';
import cartIcon from '../../../assets/images/cart.png';

const ModalAddItem = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [qunatity, setQunatity] = useState('1');
  const [value, setValue] = useState('');
  const canAdd = !!(name && qunatity);

  function onAddItem() {
    console.log(
      'action ',
      name,
      Number(value.replace(',', '.')),
      Number(qunatity.replace(',', '.')),
    );
    dispatch(
      AddItem(
        name,
        Number(value.replace(',', '.')),
        Number(qunatity.replace(',', '.')),
      ),
    );
    dispatch(ShowAddItem(false));
  }

  return (
    <Container>
      <ModalTitleContainer>
        <ModalTitle>Novo Produto</ModalTitle>
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
              value={qunatity}
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
              value={value}
              onChangeText={(text) => setValue(text)}
            />
          </ProductInputContainer>
        </ValueItemContainer>
      </ValueContainer>
      <ButtonContainer enable={canAdd}>
        <AddButtonContainer disabled={!canAdd} onPress={onAddItem}>
          <AddButtonIcon source={cartIcon} resizeMode="contain" />
        </AddButtonContainer>
      </ButtonContainer>
    </Container>
  );
};

export default ModalAddItem;
