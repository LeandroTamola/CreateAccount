import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Text} from '@src/components/Text';
import {Button} from '@src/components/Button';
import {COLORS} from '@src/constants';
import {TextInput} from '@src/components/TextInput';
import {useCreateAccountScreen} from './useCreateAccountScreen';

const CreateAccountScreen = () => {
  const {handleSubmit, onTermsOfServicePress, formValues} =
    useCreateAccountScreen();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.formContainer}>
        <TextInput
          value={formValues.current?.firstName}
          iconName="PersonCircle"
          placeholder="First Name"
          style={styles.textInput}
        />
        <TextInput
          value={formValues.current?.lastName}
          iconName="PersonCircle"
          placeholder="Last Name"
          style={styles.textInput}
        />
        <TextInput
          value={formValues.current?.email}
          iconName="Envelope"
          placeholder="Email Address"
          style={styles.textInput}
          keyboardType="email-address"
        />
        <TextInput
          value={formValues.current?.password}
          iconName="Lock"
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
      </View>

      <SafeAreaView edges={['bottom']} style={styles.footer}>
        <Text style={styles.disclaimer}>
          By creating this account, I agree that I am a U.S. resident, 18 years
          or older with a valid bank account. I agree to Goalsetter’s{' '}
          <Text onPress={onTermsOfServicePress}>Terms of Service</Text>
        </Text>
        <Button text="CREATE FREE ACCOUNT" onPress={handleSubmit} />
      </SafeAreaView>
    </ScrollView>
  );
};

export {CreateAccountScreen};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  formContainer: {
    paddingHorizontal: 12,
    width: '100%',
    marginTop: 52,
  },
  textInput: {
    marginBottom: 30,
  },
  footer: {
    width: '100%',
    paddingBottom: 16,
  },
  disclaimer: {
    textAlign: 'center',
    color: COLORS.TEXT.SECONDARY,
    marginBottom: 23,
  },
});
