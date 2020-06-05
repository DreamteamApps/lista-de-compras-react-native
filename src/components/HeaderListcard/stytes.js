import styled from 'styled-components/native';
import {colors, font} from '../../theme';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  border-color: ${colors.paperLine};
  border-bottom-width: 2px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
export const Text = styled.Text`
  font-family: ${font.default};
  padding-left: 5px;
  font-size: ${font.xlarge}px;
  margin-bottom: -10px;
  color: ${colors.titles};
`;

export const TouchContainer = styled.TouchableOpacity`
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  margin-left: 10px;
  margin-top: 4px;
`;
export const ButtonIcon = styled.Image`
  width: 35px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;
