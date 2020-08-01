import styled from 'styled-components/native';
import {colors, font} from '../../theme';

export const Container = styled.View`
  padding: 15px;
`;

export const ModalTitleContainer = styled.View`
  align-items: center;
`;
export const ModalTitle = styled.Text`
  font-family: ${font.default};
  text-align: center;
  padding-left: 5px;
  font-size: ${font.xlarge}px;
  color: ${colors.titles};
`;

export const ModelSubTitle = styled.Text`
  font-family: ${font.default};
  text-align: center;
  padding-left: 5px;
  font-size: ${font.small}px;
  color: ${colors.complementary};
  margin-top: ${font.small/2}px;
`;

export const Title = styled.Text`
  font-family: ${font.default};
  padding-left: 5px;
  font-size: ${font.small}px;
  color: ${colors.titles};
  margin-bottom: -${font.small / 2}px;
`;

export const ButtonContainer = styled.View`
  margin-top: ${font.small}px;
  justify-content: flex-end;
  opacity: ${(props) => (props.enable ? 1 : 0.4)};
`;

export const AddButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.paperLine};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
`;

export const AddButtonIcon = styled.Image`
  height: 40px;
`;
