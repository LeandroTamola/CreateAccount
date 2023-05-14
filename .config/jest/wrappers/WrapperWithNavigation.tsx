import React, {FC, PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const Stack = createNativeStackNavigator();

const WrapperWithNavigation: FC<PropsWithChildren<unknown>> = ({children}) => {
  const MockedScreen = () => {
    return <>{children}</>;
  };

  const setup = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Test_Screen" component={MockedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return setup;
};
export {WrapperWithNavigation};
