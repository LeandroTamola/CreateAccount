import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '@src/constants';
import {LinearGradient, LinearGradientProps} from '@components/LinearGradient';
import {Text} from '@components/Text';
import {useNavigation} from '@react-navigation/native';
import {RootNavigatorProps} from '@src/navigators/RootNavigator/types';
import {Button} from './Button';

type Variant = 'primary' | 'secondary';
interface Props {
  title: string;
  description?: string;
  variant?: Variant;
}

const NavigatorHeader: FC<Props> = ({
  title,
  description,
  variant = 'primary',
}) => {
  const navigation = useNavigation<RootNavigatorProps>();
  return (
    <LinearGradient colors={gradientColors[variant]}>
      <SafeAreaView edges={['top']} style={styles.container}>
        {navigation.canGoBack() && (
          <Button
            iconName="ChevronLeft"
            variant="ghost"
            onPress={navigation.goBack}
          />
        )}
        <View style={styles.textContainer}>
          <Text variant="lg" bold style={[styles.text]}>
            {title}
          </Text>
          {description && (
            <Text style={[styles.text, styles.description]}>{description}</Text>
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export {NavigatorHeader};

const gradientColors: Record<Variant, LinearGradientProps['colors']> = {
  primary: [COLORS.PRIMARY.LIGHT, COLORS.PRIMARY.DARK],
  secondary: [COLORS.SECONDARY.LIGHT, COLORS.SECONDARY.DARK],
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 22,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  description: {
    marginTop: 16,
  },
  textContainer: {flex: 1},
});
