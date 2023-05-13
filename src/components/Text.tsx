import {COLORS} from '@src/constants';
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
      ]}>
      {children}
    </RNText>
  );
};

export {Text};

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'AvenirLTStd-Black',
  },
  link: {
    color: COLORS.PRIMARY.DEFAULT,
  },
});

const textStyles = StyleSheet.create({
  xl: {
    color: COLORS.TEXT.PRIMARY,
    fontFamily: 'AvenirLTStd-Heavy',
    fontSize: 20,
    lineHeight: 24,
  },
  lg: {
    color: COLORS.TEXT.PRIMARY,
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: 20,
    lineHeight: 24,
  },
  md: {
    color: COLORS.TEXT.PRIMARY,
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: 14,
    lineHeight: 16,
  },
  sm: {
    color: COLORS.TEXT.PRIMARY,
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: 12,
    lineHeight: 14,
  },
});
