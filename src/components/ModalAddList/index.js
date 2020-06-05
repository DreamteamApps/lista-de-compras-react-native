import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

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

import {AddList as AddListAction, ShowAddList} from '../../Store/ListStore';

const ModalAddList = () => {
  const dispatch = useDispatch();
  const listStore = useSelector((state) => state.listStore);
  const [name, setName] = useState(listStore.selectedList?.name ?? '');
  const existingAvailable = listStore.selectedList?.available;
  const [available, setAvailable] = useState(
    `${existingAvailable === 0 ? '' : existingAvailable ?? ''}`,
  );
  const canAdd = !!name;
  let title = getTitle();

  console.log('listStore.selectedList?.status', listStore.selectedList?.status);
  function getTitle() {
    switch (listStore.selectedList?.status) {
      case 'NEW':
        return 'Nova Lista';
      case 'EDITING':
        return 'Editar Lista';
    }
  }

  function onAddList() {
    dispatch(
      AddListAction(
        listStore.selectedList.id,
        name,
        Number(available.replace(',', '.')),
      ),
    );
    dispatch(ShowAddList(false));
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
