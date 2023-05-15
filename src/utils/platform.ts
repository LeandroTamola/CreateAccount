import {Dimensions, Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const PlatformUtils = {
  isIOS,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
