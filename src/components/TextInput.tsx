import React, {FC, useRef} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {SvgImage, SvgImageName} from './SvgImage';
import {COLORS} from '@src/constants';
import {Text} from './Text';
import {PlatformUtils} from '@src/utils/platform';
import {FONTS} from '@src/constants/Fonts';

const TRANSLATE_Y = PlatformUtils.isIOS ? 24 : 40;

export interface TextInputProps extends RNTextInputProps {
  iconName?: SvgImageName;
  errorMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const TextInput: FC<TextInputProps> = ({
  iconName,
  errorMessage,
  placeholder,
  containerStyle,
  value,
  onBlur,
  ...props
}) => {
  const isFocused = useSharedValue<boolean>(false);
  const inputRef = useRef<RNTextInput>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const onFocus = () => {
    'worklet';
    isFocused.value = true;
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    'worklet';
    isFocused.value = false;
    onBlur && runOnJS(onBlur)(e);
  };

  const animatedLabel = useAnimatedStyle(() => {
    const shouldAnimate = isFocused.value || !!value;
    return {
      transform: [
        {translateY: withTiming(shouldAnimate ? 0 : TRANSLATE_Y)},
        {translateX: withTiming(shouldAnimate ? -12 : 0)},
        {scale: withTiming(shouldAnimate ? 0.9 : 1)},
      ],
    };
  }, [value]);

  return (
    <Pressable style={containerStyle} onPress={handleFocus}>
      <Animated.View style={animatedLabel}>
        <Text style={styles.label} bold>
          {placeholder}
        </Text>
      </Animated.View>
      <View
        testID="text-input-wrapper"
        style={StyleSheet.flatten([
          styles.textInputContainer,
          !!errorMessage && styles.errorContainer,
        ])}>
        {iconName && (
          <SvgImage name={iconName} style={styles.icon} fill={COLORS.WHITE} />
        )}
        <RNTextInput
          {...props}
          value={value}
          ref={inputRef}
          style={styles.input}
          onFocus={onFocus}
          onBlur={handleOnBlur}
        />
      </View>
    </Pressable>
  );
};

export {TextInput};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    borderBottomColor: COLORS.TEXT.SECONDARY,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingBottom: 14,
  },
  errorContainer: {
    borderBottomColor: COLORS.ERROR,
  },
  label: {
    color: COLORS.TEXT.SECONDARY,
    marginLeft: 31,
    marginBottom: 6,
  },
  icon: {
    marginRight: 13,
  },
  input: {
    width: '100%',
    fontFamily: FONTS.AvenirStdHeavy,
    color: COLORS.PRIMARY.DEFAULT,
    fontSize: 16,
  },
});
