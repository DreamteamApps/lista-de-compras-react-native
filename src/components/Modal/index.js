import React from 'react';
import {Modal as RNModal, KeyboardAvoidingView, StyleSheet} from 'react-native';

import {Container, ModalBox, CloseButtonBox, CloseButtonIcon} from './styles';

const modalShadow = StyleSheet.create({
  shadowOffset: {width: 0, height: 2},
});
const Modal = ({visible = true, onClose, children}) => {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      hardwareAccelerated={true}
      visible={visible}
      onRequestClose={() => {
        onClose && onClose();
      }}>
      <Container>
        <ModalBox style={{modalShadow}}>
          <CloseButtonBox onPress={onClose}>
            <CloseButtonIcon>X</CloseButtonIcon>
          </CloseButtonBox>
          {children}
        </ModalBox>
      </Container>
    </RNModal>
  );
};

export default Modal;
