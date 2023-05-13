import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/core';

export type PrivateNavigatorParams = {
  LinkYourBank: undefined;
};

export type PrivateNavigatorProps =
  NativeStackNavigationProp<PrivateNavigatorParams>;
export type PrivateNavigatorRouteProp<T extends keyof PrivateNavigatorParams> =
  RouteProp<PrivateNavigatorParams, T>;
