import React from 'react';
import {Modal as RNModal, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {showModal} from '../../store/ModalStore';

import {Container, ModalBox, CloseButtonBox, CloseButtonIcon} from './styles';

const modalShadow = StyleSheet.create({
  shadowOffset: {width: 0, height: 2},
});
const Modal = () => {
  const dispatch = useDispatch();
  var modalStore = useSelector((state) => state.modalStore);
  console.log('modalstore', modalStore);

  return (
    <RNModal
      animationType="slide"
      transparent={true}
      hardwareAccelerated={true}
      visible={modalStore.show}
      onRequestClose={() => {
        dispatch(showModal(false));
      }}>
      <Container>
        <ModalBox style={{modalShadow}}>
          <CloseButtonBox
            onPress={() => {
              dispatch(showModal(false));
            }}>
            <CloseButtonIcon>X</CloseButtonIcon>
          </CloseButtonBox>
          {modalStore.children}
        </ModalBox>
      </Container>
    </RNModal>
  );
};

export default Modal;
