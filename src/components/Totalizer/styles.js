import styled from 'styled-components/native';
import {colors, font} from '../../theme';

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  border-color: ${colors.paperLine};
  border-top-width: 2px;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

export const TotalizerContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
`;

export const Text = styled.Text`
  font-family: ${font.default};
  font-size: ${font.small}px;
  margin-bottom: -5px;
  color: ${colors.titles};
`;

export const Price = styled.Text`
  font-family: ${font.default};
  font-size: ${font.medium}px;
  margin-bottom: -5px;
  color: ${colors.money};
`;

export const Available = styled(Price)`
  color: ${colors.complementary};
`;

export const Economy = styled(Price)`
  color: ${colors.success};
`;
