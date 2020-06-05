import React from 'react';
import {useDispatch} from 'react-redux';
import {CheckItem} from '../../Store/ListStore';
import {
  Container,
  InfoContainer,
  Multiplier,
  Currency,
  Text,
  Price,
  TitleContainer,
  CheckContainer,
  Check,
  CheckBox,
} from './stytes';
const PaperListItem = ({id, name, price, quantity = 1, check = false}) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <CheckContainer onPress={() => dispatch(CheckItem(id))}>
        <CheckBox>[]</CheckBox>
        {check && <Check>✓</Check>}
      </CheckContainer>
      <InfoContainer>
        <TitleContainer>
          <Text numberOfLines={1} maxWidth={'55%'}>
            {name}
          </Text>
        </TitleContainer>
        <Price>
          <Currency>R$ </Currency>
          {price.toFixed(2)}
          <Multiplier> x{quantity}</Multiplier>
        </Price>
      </InfoContainer>
    </Container>
  );
};

export default PaperListItem;
