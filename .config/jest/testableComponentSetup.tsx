import React, {ReactElement} from 'react';
import {render, screen} from '@testing-library/react-native';
import {WrapperWithNavigation} from './wrappers/WrapperWithNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export type TestableComponentSetupProps = {
  Component: ReactElement;
};

const testableComponentSetup = ({Component}: TestableComponentSetupProps) => {
  render(
    <SafeAreaProvider>
      <WrapperWithNavigation>{Component}</WrapperWithNavigation>
    </SafeAreaProvider>,
  );
  return {screen};
};

export {testableComponentSetup};
