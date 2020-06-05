import styled from 'styled-components/native';
import {colors, font} from '../../theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  width: 300px;
  max-height: 300px;
  position: relative;
  padding: 5px;
  border-radius: 30px;
  background-color: ${colors.background};
  border-color: ${colors.paperLine};
  border-width: 3px;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const CloseButtonBox = styled.TouchableOpacity`
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonIcon = styled.Text`
  font-family: ${font.default};
  font-size: ${font.xlarge}px;
  color: ${colors.complementary};
`;
