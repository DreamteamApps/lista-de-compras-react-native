import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SelectList} from '../../Store/ListStore';
import uuid from 'uuid-js';
import {CalcTotalizer} from '../Totalizer';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  TextContainer,
  Text,
  InfoText,
  InfoTextAvailable,
  InfoTextEconomny,
  InfoTextTotal,
  TouchContainer,
  ButtonIcon,
} from './styles';
import editIcon from '../../../assets/images/edit.png';
import copyIcon from '../../../assets/images/copy.png';
import deleteIcon from '../../../assets/images/delete.png';
import Modal from './../Modal/index';
import ModalDeleteList from './../ModalDeleteList';
import ModalAddList from './../ModalAddList';

const ListCard = ({list}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const total = CalcTotalizer(list.products);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditList, setShowEditList] = useState(false);
  const [showCloneList, setShowCloneList] = useState(false);

  const navigateToList = () => {
    dispatch(SelectList(list.id));
    navigation.navigate('List');
  };

  return (
    <Container onPress={navigateToList}>
      <Modal
        visible={showDeleteConfirmation}
        onClose={() => setShowDeleteConfirmation(false)}>
        <ModalDeleteList
          list={list}
          onClose={() => setShowDeleteConfirmation(false)}
        />
      </Modal>
      <Modal
        visible={showEditList}
        onClose={() => {
          setShowEditList(false);
        }}>
        <ModalAddList
          list={list}
          title="Editar lista"
          onClose={() => {
            setShowEditList(false);
          }}
        />
      </Modal>
      <Modal
        visible={showCloneList}
        onClose={() => {
          setShowCloneList(false);
        }}>
        <ModalAddList
          list={{
            ...list,
            id: uuid.create().toString(),
            name: list.name + ' clone',
          }}
          title="Clonar lista"
          onClose={() => {
            setShowCloneList(false);
          }}
        />
      </Modal>
      <TextContainer>
        <Text numberOfLines={1}>{list.name}</Text>
        <TouchContainer onPress={() => setShowEditList(true)}>
          <ButtonIcon source={editIcon} resizeMode="contain" />
        </TouchContainer>
        <TouchContainer onPress={() => setShowCloneList(true)}>
          <ButtonIcon source={copyIcon} resizeMode="contain" />
        </TouchContainer>
        <TouchContainer onPress={() => setShowDeleteConfirmation(true)}>
          <ButtonIcon source={deleteIcon} resizeMode="contain" />
        </TouchContainer>
      </TextContainer>
      <TextContainer>
        <Text numberOfLines={1}> </Text>
      </TextContainer>
      <TextContainer>
        <InfoText numberOfLines={1}>
          Disponivel :
          <InfoTextAvailable>
            R$ {list.available ? list.available.toFixed(2) : '-'}
          </InfoTextAvailable>
        </InfoText>
      </TextContainer>
      <TextContainer>
        <InfoText numberOfLines={1}>
          Balanço :
          {list.available >= total ? (
            <InfoTextEconomny>
              R$ {list.available ? (list.available - total).toFixed(2) : '-'}
            </InfoTextEconomny>
          ) : (
            <InfoTextTotal>
              R$ {(list.available - total).toFixed(2)}
            </InfoTextTotal>
          )}
        </InfoText>
      </TextContainer>
      <TextContainer>
        <InfoText numberOfLines={1}>
          Total :{' '}
          <InfoTextTotal> R$ {total ? total.toFixed(2) : '-'}</InfoTextTotal>
        </InfoText>
      </TextContainer>
    </Container>
  );
};

export default ListCard;
