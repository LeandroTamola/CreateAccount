import {COLORS} from '@src/constants';
import {FONTS} from '@src/constants/Fonts';
import React, {FC} from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';

interface Props extends TextProps {
  variant?: keyof typeof textStyles;
  bold?: boolean;
}

const Text: FC<Props> = ({
  children,
  variant = 'md',
  bold,
  style,
  onPress,
  ...props
}) => {
  return (
    <RNText
      {...props}
      style={[
        textStyles[variant],
        bold && styles.bold,
        onPress && styles.link,
        style,
      ]}
      onPress={onPress}>
      {children}
    </RNText>
  );
};

export {Text};

const styles = StyleSheet.create({
  bold: {
    fontFamily: FONTS.AvenirStdBlack,
  },
  link: {
    color: COLORS.PRIMARY.DEFAULT,
  },
});

const textStyles = StyleSheet.create({
  lg: {
    color: COLORS.TEXT.PRIMARY,
    fontFamily: FONTS.AvenirStdRoman,
    fontSize: 20,
    lineHeight: 24,
  },
  md: {
    color: COLORS.TEXT.PRIMARY,
    fontFamily: FONTS.AvenirStdRoman,
    fontSize: 14,
    lineHeight: 19,
  },
  sm: {
    color: COLORS.TEXT.PRIMARY,
    fontFamily: FONTS.AvenirStdRoman,
    fontSize: 12,
    lineHeight: 14,
  },
});
