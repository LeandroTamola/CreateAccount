import {
  ActivityIndicator,
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
  isLoading?: boolean;
}

const Button: FC<Props> = ({
  text,
  variant = 'primary',
  style,
  disabled,
  iconName,
  isLoading,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        buttonStyles[variant].button,
        disabled && buttonStyles[variant].disabled,
        style,
      ]}
      disabled={disabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator color={COLORS.WHITE} />
      ) : (
        <>
          {iconName && <SvgImage name={iconName} color={COLORS.WHITE} />}
          {text && (
            <Text style={buttonStyles[variant].text} bold numberOfLines={1}>
              {text}
            </Text>
          )}
        </>
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
      justifyContent: 'center',
      height: 60,
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
