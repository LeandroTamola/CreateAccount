import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigatorParams} from './types';
import {PublicNavigator} from '../PublicNavigator/PublicNavigator';
import {PrivateNavigator} from '../PrivateNavigator/PrivateNavigator';
import {useLoginContext} from '@src/context/UserContext';

const RootStack = createNativeStackNavigator<RootNavigatorParams>();

const RootNavigator = () => {
  const {user} = useLoginContext();

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <RootStack.Screen
          name="PrivateNavigator"
          component={PrivateNavigator}
        />
      ) : (
        <RootStack.Screen name="PublicNavigator" component={PublicNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export {RootNavigator};
