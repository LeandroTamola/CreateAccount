import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '@src/constants';
import {Text} from './Text';

interface Props extends TouchableOpacityProps {
  text: string;
  variant?: keyof typeof buttonStyles;
}

const Button: FC<Props> = ({
  text,
  variant = 'primary',
  style,
  disabled,
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
      <Text style={buttonStyles[variant].text} bold>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export {Button};

const buttonStyles = {
  primary: StyleSheet.create({
    button: {
      width: '100%',
      borderRadius: 5,
      backgroundColor: COLORS.SECONDARY,
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
};
