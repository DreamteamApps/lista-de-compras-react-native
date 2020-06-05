import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import uuid from 'uuid-js';

import {
  Container,
  ProductInputContainer,
  ProductInput,
  Title,
  AddButtonContainer,
  AddButtonIcon,
  ButtonContainer,
  ValueItemContainer,
  ModalTitle,
  ModalTitleContainer,
} from './styles';
import createList from '../../../assets/images/create-list.png';

import {AddList as AddListAction} from '../../Store/ListStore';

const ModalAddList = ({list, title, onClose}) => {
  const dispatch = useDispatch();

  list = list ?? {id: uuid.create().toString(), name: '', products: []};

  const [name, setName] = useState(list.name ?? '');
  const [available, setAvailable] = useState(
    `${list.available === 0 ? '' : list.available ?? ''}`,
  );

  const canAdd = !!name;

  function onAddList() {
    dispatch(
      AddListAction({
        ...list,
        name,
        available: Number(available.replace(',', '.')),
      }),
    );
    onClose && onClose();
  }

  return (
    <>
      <Container>
        <ModalTitleContainer>
          <ModalTitle> {title}</ModalTitle>
        </ModalTitleContainer>
        <Title>Nome</Title>
        <ProductInputContainer>
          <ProductInput
            placeholder="Nome da lista"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </ProductInputContainer>
        <ValueItemContainer>
          <Title>Valor Disponivel</Title>
          <ProductInputContainer>
            <ProductInput
              keyboardType={'number-pad'}
              placeholder="0.00"
              value={available}
              onChangeText={(text) => setAvailable(text)}
            />
          </ProductInputContainer>
        </ValueItemContainer>
        <ButtonContainer enable={canAdd}>
          <AddButtonContainer disabled={!canAdd} onPress={onAddList}>
            <AddButtonIcon source={createList} resizeMode="contain" />
          </AddButtonContainer>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ModalAddList;
