import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {SvgImage, SvgImageName} from './SvgImage';
import {COLORS} from '@src/constants';

interface Props extends TextInputProps {
  iconName: SvgImageName;
}
const TextInput: FC<Props> = ({iconName, style, ...props}) => {
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <SvgImage
          name={iconName}
          style={styles.icon}
          fill={COLORS.TEXT.SECONDARY}
        />
      )}
      <RNTextInput
        {...props}
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
