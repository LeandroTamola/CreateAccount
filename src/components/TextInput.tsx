import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, {FC, useRef} from 'react';
import {SvgImage, SvgImageName} from './SvgImage';
import {COLORS} from '@src/constants';

interface Props extends TextInputProps {
  iconName: SvgImageName;
  errorMessage?: string;
}
const TextInput: FC<Props> = ({iconName, style, errorMessage, ...props}) => {
  const inputRef = useRef<RNTextInput>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <View
      style={[styles.container, !!errorMessage && styles.errorContainer, style]}
      onTouchStart={handleFocus}>
      {iconName && (
        <SvgImage
          name={iconName}
          style={styles.icon}
          fill={COLORS.TEXT.SECONDARY}
        />
      )}
      <RNTextInput
        {...props}
        ref={inputRef}
        style={styles.input}
        placeholderTextColor={COLORS.TEXT.SECONDARY}
        allowFontScaling={false}
      />
    </View>
  );
};

export {TextInput};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: COLORS.TEXT.SECONDARY,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    paddingBottom: 19,
    marginBottom: 30,
  },
  errorContainer: {
    borderBottomColor: COLORS.ERROR,
  },
  icon: {
    marginRight: 13,
  },
  input: {
    fontFamily: 'AvenirLTStd-Heavy',
    color: COLORS.PRIMARY.DEFAULT,
    fontSize: 14,
    lineHeight: 16,
  },
});
