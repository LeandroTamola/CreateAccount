import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

import 'react-native-gesture-handler/jestSetup';
import 'react-native-reanimated/src/reanimated2/jestUtils';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
