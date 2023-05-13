import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PrivateNavigatorParams} from './types';
import {LinkYourBankScreen} from '../../screens/Private';

const PivateStack = createNativeStackNavigator<PrivateNavigatorParams>();

const PrivateNavigator = () => {
  return (
    <PivateStack.Navigator initialRouteName="LinkYourBank">
      <PivateStack.Screen name="LinkYourBank" component={LinkYourBankScreen} />
    </PivateStack.Navigator>
  );
};

export {PrivateNavigator};
