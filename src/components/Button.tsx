import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '@src/constants';
import {Text} from './Text';
import {SvgImage} from './SvgImage';
import {SvgImageName} from './SvgImage';

interface Props extends TouchableOpacityProps {
  text?: string;
  variant?: keyof typeof buttonStyles;
  iconName?: SvgImageName;
}

const Button: FC<Props> = ({
  text,
  variant = 'primary',
  style,
  disabled,
  iconName,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        buttonStyles[variant].button,
        disabled && buttonStyles[variant].disabled,
        style,
      ]}>
      {iconName && <SvgImage name={iconName} color={COLORS.WHITE} />}
      {text && (
        <Text style={buttonStyles[variant].text} bold numberOfLines={1}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export {Button};

const buttonStyles = {
  primary: StyleSheet.create({
    button: {
      width: '100%',
      borderRadius: 5,
      backgroundColor: COLORS.GREEN,
      paddingVertical: 20,
      alignItems: 'center',
    },
    text: {
      color: COLORS.WHITE,
    },
    disabled: {
      opacity: 0.5,
    },
  }),
  ghost: StyleSheet.create({
    button: {},
    disabled: {opacity: 0.5},
    text: {
      color: COLORS.WHITE,
    },
  }),
};
