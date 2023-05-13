import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigatorParams} from './types';
import {PublicNavigator} from '../PublicNavigator/PublicNavigator';
import {PrivateNavigator} from '../PrivateNavigator/PrivateNavigator';

const RootStack = createNativeStackNavigator<RootNavigatorParams>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="PublicNavigator" component={PublicNavigator} />
      <RootStack.Screen name="PrivateNavigator" component={PrivateNavigator} />
    </RootStack.Navigator>
  );
};

export {RootNavigator};

const styles = StyleSheet.create({});
