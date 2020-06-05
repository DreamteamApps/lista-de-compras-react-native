import React, {useState} from 'react';
import {
  TouchContainer,
  TitleContainer,
  Container,
  ButtonIcon,
  Text,
  ButtonContainer,
} from './stytes';
import createList from '../../../assets/images/create-list.png';
import Modal from './../Modal/index';
import ModalAddList from './../ModalAddList/index';

const HeaderListCard = () => {
  const [showAddList, setShowAddList] = useState(false);
  return (
    <Container>
      <TitleContainer>
        <Text numberOfLines={1}>Minhas Listas</Text>
      </TitleContainer>
      <ButtonContainer>
        <TouchContainer onPress={() => setShowAddList(true)}>
          <ButtonIcon source={createList} resizeMode="contain" />
        </TouchContainer>
      </ButtonContainer>
      <Modal
        visible={showAddList}
        onClose={() => {
          setShowAddList(false);
        }}>
        <ModalAddList
          title="Nova lista"
          onClose={() => {
            setShowAddList(false);
          }}
        />
      </Modal>
    </Container>
  );
};

export default HeaderListCard;
