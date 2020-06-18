import React from 'react';
import {Text, TouchContainer, ButtonIcon, ButtonContainer} from './stytes';

const EmptyList = ({text, action, icon}) => {
  return (
    <TouchContainer>
      <Text>Nada por aqui ainda...</Text>
      <Text>{text}</Text>
      <ButtonContainer onPress={action}>
        <ButtonIcon source={icon} resizeMode="contain" />
      </ButtonContainer>
    </TouchContainer>
  );
};

export default EmptyList;
