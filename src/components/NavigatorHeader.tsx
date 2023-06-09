import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {COLORS} from '@src/constants';
import {Text, LinearGradient, SvgImage} from '@src/components';
import {LinearGradientProps} from '@components/LinearGradient';
import {RootNavigatorProps} from '@src/navigators/RootNavigator/types';
import {Button} from './Button';
import {PlatformUtils} from '@src/utils/platform';

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
      {variant === 'primary' && (
        <SvgImage
          name="HeaderPatternIllustration"
          width={PlatformUtils.SCREEN_WIDTH}
          height="100%"
          style={styles.headerPattern}
        />
      )}
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
  headerPattern: {
    ...StyleSheet.absoluteFillObject,
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
