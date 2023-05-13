import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigators/RootNavigator/RootNavigator';
import {UserProvider} from './context/UserContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <UserProvider>
        <RootNavigator />
      </UserProvider>
    </NavigationContainer>
  );
}

export default App;
