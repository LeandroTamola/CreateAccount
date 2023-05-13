import React, {FC, useRef} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SvgImage, SvgImageName} from './SvgImage';
import {COLORS} from '@src/constants';
import {Text} from './Text';

interface Props extends TextInputProps {
  iconName: SvgImageName;
  errorMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
const TextInput: FC<Props> = ({
  iconName,
  errorMessage,
  placeholder,
  containerStyle,
  value,
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

  const onBlur = () => {
    'worklet';
    isFocused.value = false;
  };

  const animatedLabel = useAnimatedStyle(() => {
    const shouldAnimate = isFocused.value || !!value;
    return {
      transform: [
        {translateY: withTiming(shouldAnimate ? 0 : 24)},
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
        style={[
          styles.textInputContainer,
          !!errorMessage && styles.errorContainer,
        ]}>
        {iconName && (
          <SvgImage
            name={iconName}
            style={styles.icon}
            fill={COLORS.TEXT.SECONDARY}
          />
        )}
        <RNTextInput
          {...props}
          value={value}
          ref={inputRef}
          style={styles.input}
          allowFontScaling={false}
          onFocus={onFocus}
          onBlur={onBlur}
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
    opacity: 0.7,
  },
  icon: {
    marginRight: 13,
  },
  input: {
    fontFamily: 'AvenirLTStd-Heavy',
    color: COLORS.PRIMARY.DEFAULT,
    fontSize: 16,
  },
});
