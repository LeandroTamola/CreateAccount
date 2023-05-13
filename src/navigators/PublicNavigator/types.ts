import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/core';

export type PublicNavigatorParams = {
  CreateAccount: undefined;
  TermsOfServices: undefined;
};

export type PublicNavigatorProps =
  NativeStackNavigationProp<PublicNavigatorParams>;
export type PublicNavigatorRouteProp<T extends keyof PublicNavigatorParams> =
  RouteProp<PublicNavigatorParams, T>;
