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

import {AddList as AddListAction, ShowCloneList} from '../../Store/ListStore';

const ModalCloneList = () => {
  const dispatch = useDispatch();
  const listStore = useSelector((state) => state.listStore);
  const [name, setName] = useState(listStore.cloneList?.name ?? '');
  const existingAvailable = listStore.cloneList?.available;
  const [available, setAvailable] = useState(
    `${existingAvailable === 0 ? '' : existingAvailable ?? ''}`,
  );
  const canAdd = !!name;

  function onAddList() {
    dispatch(AddListAction(listStore.cloneList.id, name, Number(available)));
    dispatch(ShowCloneList(false));
  }

  return (
    <>
      <Container>
        <ModalTitleContainer>
          <ModalTitle>Clonar Lista</ModalTitle>
        </ModalTitleContainer>
        <Title>Nome da nova lista</Title>
        <ProductInputContainer>
          <ProductInput
            placeholder="Nome da lista"
            value={name}
            disabled
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

export default ModalCloneList;
