import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigators/RootNavigator/RootNavigator';
import {UserProvider} from './context/UserContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <UserProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </UserProvider>
    </NavigationContainer>
  );
}

export default App;
