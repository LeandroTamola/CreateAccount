import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@src/components/Text';
import {Button} from '@src/components/Button';

const CreateAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreateAccountScreen</Text>
      <Button text="CREATE FREE ACCOUNT" />
    </View>
  );
};

export {CreateAccountScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
