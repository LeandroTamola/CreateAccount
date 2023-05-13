import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '@src/components/Text';

const CreateAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreateAccountScreen</Text>
    </View>
  );
};

export {CreateAccountScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
