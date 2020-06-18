import styled from 'styled-components/native';
import {colors, font, hpx} from '../../theme';

export const Container = styled.View`
  padding: 15px;
`;

export const ModalTitleContainer = styled.View`
  align-items: center;
`;
export const ModalTitle = styled.Text`
  font-family: ${font.default};
  padding-left: 5px;
  font-size: ${font.large}px;
  color: ${colors.titles};
`;

export const Title = styled.Text`
  font-family: ${font.default};
  padding-left: 5px;
  font-size: ${font.small}px;
  color: ${colors.titles};
  margin-bottom: -${font.small / 2}px;
`;
export const ProductInputContainer = styled.View`
  border-color: ${colors.paperLine};
  border-bottom-width: 2px;
  padding: 5px;
  margin-bottom: 10px;
`;
export const ProductInput = styled.TextInput`
  font-family: ${font.default};
  font-size: ${font.small}px;
  margin-bottom: -${font.small}px;
  text-decoration: none;
  height: ${hpx(60)}px;
`;
export const ValueContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ValueItemContainer = styled.View`
  height: 90px;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  opacity: ${(props) => (props.enable ? 1 : 0.4)};
`;

export const AddButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.success};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex: 1;
  margin: 5px;
`;

export const DeleteButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.money};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex: 1;
  margin: 5px;
`;

export const ButtonIcon = styled.Image`
  width: 35px;
`;
