import styled from 'styled-components/native';
import {colors, font} from '../../theme';

export const Container = styled.View`
  padding: 15px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${font.default};
  font-size: ${font.large}px;
  color: ${colors.titles};
`;

export const Content = styled.Text`
  font-family: ${font.default};
  font-size: ${font.small}px;
  color: ${colors.titles};
  text-align: center;
`;

export const ActionsContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 5px;
  border-radius: 10px;
  background-color: #ffffff;
  border-width: 2px;
  border-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  elevation: 1;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 1.84px;
`;

export const ButtonText = styled.Text`
  font-family: ${font.default};
  font-size: ${font.small}px;
  color: ${colors.complementary};
`;
