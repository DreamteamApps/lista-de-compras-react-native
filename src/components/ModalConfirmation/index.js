import React from 'react';

import {
  Container,
  Title,
  ActionsContainer,
  ButtonContainer,
  ButtonText,
  Content,
} from './styles';

const ModalConfirmation = ({title, content, leftButton, rightButton}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <ActionsContainer>
        <ButtonContainer onPress={leftButton.action} color={leftButton.color}>
          <ButtonText>{leftButton.text}</ButtonText>
        </ButtonContainer>
        <ButtonContainer onPress={rightButton.action} color={rightButton.color}>
          <ButtonText>{rightButton.text}</ButtonText>
        </ButtonContainer>
      </ActionsContainer>
    </Container>
  );
};

export default ModalConfirmation;
