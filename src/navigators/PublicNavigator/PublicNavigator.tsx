import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PublicNavigatorParams} from './types';
import {
  CreateAccountScreen,
  TermsOfServicesScreen,
} from '@src/screens/Public/index';
import {NavigatorHeader} from '@src/components/NavigatorHeader';

const PublicStack = createNativeStackNavigator<PublicNavigatorParams>();

const PublicNavigator = () => {
  return (
    <PublicStack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={{headerShown: true}}>
      <PublicStack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{
          header: () => (
            <NavigatorHeader
              title="Create Your Account"
              description="You can be a parent, godparent, grandparent or even a favorite aunt. We’ll add the kids after!"
            />
          ),
        }}
      />
      <PublicStack.Screen
        name="TermsOfServices"
        component={TermsOfServicesScreen}
        options={{
          header: () => (
            <NavigatorHeader title="Terms of Services" variant="secondary" />
          ),
        }}
      />
    </PublicStack.Navigator>
  );
};

export {PublicNavigator};
