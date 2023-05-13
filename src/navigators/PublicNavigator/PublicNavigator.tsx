import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PublicNavigatorParams} from './types';
import {CreateAccountScreen, TermsOfServicesScreen} from '../../screens';

const PublicStack = createNativeStackNavigator<PublicNavigatorParams>();

const PublicNavigator = () => {
  return (
    <PublicStack.Navigator initialRouteName="CreateAccount">
      <PublicStack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
      />
      <PublicStack.Screen
        name="TermsOfServices"
        component={TermsOfServicesScreen}
      />
    </PublicStack.Navigator>
  );
};

export {PublicNavigator};
