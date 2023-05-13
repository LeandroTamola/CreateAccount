import React, {FC, PropsWithChildren} from 'react';
import {
  KeyboardAvoidingViewProps,
  Platform,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

interface Props extends KeyboardAvoidingViewProps {}

const KeyboardAvoidingView: FC<PropsWithChildren<Props>> = ({
  children,
  keyboardVerticalOffset,
  ...props
}) => {
  return (
    <RNKeyboardAvoidingView
      style={styles.container}
      {...props}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={styles.contentContainer}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

export {KeyboardAvoidingView};

const styles = StyleSheet.create({
  container: {flex: 1},
  contentContainer: {flex: 1},
});
