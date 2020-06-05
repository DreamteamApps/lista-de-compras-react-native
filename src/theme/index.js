import {Dimensions} from 'react-native';
export const colors = {
  paperLine: '#BBDEF9',
  titles: '#000FCC',
  money: '#FD3838',
  success: '#40d340',
  complementary: '#2D4b76',
  background: '#FFFFFF',
};

const sizeMultiplier = {
  height: Dimensions.get('window').height / 812,
  width: Dimensions.get('window').width / 375,
};

export const hpx = (value) => {
  return value * sizeMultiplier.height;
};
export const wpx = (value) => {
  return value * sizeMultiplier.width;
};

export const font = {
  default: 'Indie Flower',
  small: hpx(26).toFixed(2),
  medium: hpx(32).toFixed(2),
  large: hpx(36).toFixed(2),
  xlarge: hpx(40).toFixed(2),
};

export const sizes = {
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  lineSpacing: hpx(40),
};
