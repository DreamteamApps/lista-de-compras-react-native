import styled from 'styled-components/native';
import {sizes, font, colors, hpx} from '../../theme';

export const TouchContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: ${sizes.screenHeight * 0.7}px;
`;
export const ButtonIcon = styled.Image`
  width: ${hpx(50)}px;
  height: ${hpx(50)}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 80%;
  height: ${hpx(60)}px;
  border-radius: 100px;
  background-color: ${colors.success};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${hpx(20)}px;
`;

export const Text = styled.Text`
  font-family: ${font.default};
  text-align: center;
  font-size: ${font.medium}px;
  width: ${sizes.screenWidth}px;
  color: ${colors.complementary};
`;
