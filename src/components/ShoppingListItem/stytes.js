import styled from 'styled-components/native';
import {colors, font} from '../../theme';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  border-color: ${colors.paperLine};
  border-bottom-width: 2px;
  align-items: flex-end;
  flex-direction: row;
`;

export const InfoContainer = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  flex: 1;
`;

export const TitleContainer = styled.View`
  flex: 1;
`;
export const Currency = styled.Text`
  font-family: ${font.default};
  font-size: ${font.medium}px;
  margin-bottom: -15px;
  color: ${colors.money};
`;

export const Multiplier = styled.Text`
  font-family: ${font.default};
  font-size: ${font.medium}px;
  margin-bottom: -${font.medium / 2}px;
  color: ${colors.complementary};
  letter-spacing: 1px;
`;

export const Text = styled.Text`
  font-family: ${font.default};
  padding-left: 5px;
  font-size: ${font.large}px;
  margin-bottom: -${font.large / 2}px;
  color: ${colors.titles};
`;

export const CheckContainer = styled.TouchableOpacity`
  padding-left: 5px;
`;
export const CheckBox = styled.Text`
  font-family: ${font.default};
  padding-left: 5px;
  font-size: ${font.medium}px;
  margin-bottom: -${font.medium / 2}px;
  color: ${colors.titles};
  position: relative;
  letter-spacing: 3px;
`;
export const Check = styled.Text`
  right: 0px;
  top: -5px;
  font-family: ${font.default};
  font-size: ${font.large}px;
  color: ${colors.money};
  position: absolute;
`;
export const Price = styled.Text`
  font-family: ${font.default};
  font-size: ${font.large}px;
  padding-right: 5px;
  margin-bottom: -${font.large / 2}px;
  color: ${colors.money};
`;
