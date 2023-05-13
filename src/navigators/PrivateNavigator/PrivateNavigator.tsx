import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PrivateNavigatorParams} from './types';
import {LinkYourBankScreen} from '@screens/Private';
import {NavigatorHeader} from '@src/components/NavigatorHeader';

const PivateStack = createNativeStackNavigator<PrivateNavigatorParams>();

const PrivateNavigator = () => {
  return (
    <PivateStack.Navigator initialRouteName="LinkYourBank">
      <PivateStack.Screen
        name="LinkYourBank"
        component={LinkYourBankScreen}
        options={{header: () => <NavigatorHeader title="Link your bank!" />}}
      />
    </PivateStack.Navigator>
  );
};

export {PrivateNavigator};
