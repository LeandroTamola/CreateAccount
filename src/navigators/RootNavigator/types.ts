import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PrivateNavigatorParams} from '../PrivateNavigator/types';
import {PublicNavigatorParams} from '../PublicNavigator/types';

export type RootNavigatorParams = {
  PublicNavigator: PublicNavigatorParams;
  PrivateNavigator: PrivateNavigatorParams;
};

export type RootNavigatorProps = NativeStackNavigationProp<RootNavigatorParams>;
