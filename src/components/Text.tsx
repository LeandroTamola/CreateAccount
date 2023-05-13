import {COLORS} from '@src/constants';
import React, {FC} from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';

interface Props extends TextProps {
  variant?: keyof typeof textStyles;
  bold?: boolean;
}

const Text: FC<Props> = ({children, variant = 'md', bold, style, ...props}) => {
  return (
    <RNText
      {...props}
      style={[textStyles[variant], bold && styles.bold, style]}>
      {children}
    </RNText>
  );
};

export {Text};

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'AvenirLTStd-Black',
  },
});

const textStyles = StyleSheet.create({
  xl: {
    color: COLORS.BLACK,
    fontFamily: 'AvenirLTStd-Heavy',
    fontSize: 20,
    lineHeight: 24,
  },
  lg: {
    color: COLORS.BLACK,
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: 20,
    lineHeight: 24,
  },
  md: {
    color: COLORS.BLACK,
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: 14,
    lineHeight: 16,
  },
  sm: {
    color: COLORS.BLACK,
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: 12,
    lineHeight: 14,
  },
});
