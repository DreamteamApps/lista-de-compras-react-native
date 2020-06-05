import styled from 'styled-components/native';
import {colors, font, sizes} from './../../theme/index';

export const Container = styled.TouchableOpacity`
  padding: 10px;
  margin: 4px;
  border-width: 2px;
  border-radius: 15px;
  border-color: ${colors.paperLine};
  background-color: ${colors.background};
  elevation: 1;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 1.84px;
`;

export const TextContainer = styled.View`
  border-color: ${colors.paperLine};
  height: ${sizes.lineSpacing}px;
  border-bottom-width: 2px;
  flex-direction: row;
  align-items: flex-end;
`;
export const Text = styled.Text`
  font-family: ${font.default};
  padding-left: 5px;
  font-size: ${font.medium}px;
  margin-bottom: -${font.medium / 2}px;
  color: ${colors.titles};
  flex: 1;
  margin-right: 10px;
`;

export const InfoText = styled.Text`
  font-family: ${font.default};
  padding-left: 5px;
  font-size: ${font.small}px;
  margin-bottom: -${font.small / 2}px;
  color: ${colors.titles};
`;

export const InfoTextAvailable = styled(InfoText)`
  color: ${colors.complementary};
`;

export const InfoTextEconomny = styled(InfoText)`
  color: ${colors.success};
`;

export const InfoTextTotal = styled(InfoText)`
  color: ${colors.money};
`;

export const TouchContainer = styled.TouchableOpacity`
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin-bottom: -2px;
`;

export const ButtonIcon = styled.Image`
  width: 30px;
`;
