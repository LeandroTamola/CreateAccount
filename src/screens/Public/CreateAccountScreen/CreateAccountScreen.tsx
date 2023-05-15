import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS} from '@src/constants';
import {useCreateAccountScreen} from './useCreateAccountScreen';
import {Button, KeyboardAvoidingView, Text, TextInput} from '@src/components';
import {PlatformUtils} from '@src/utils/platform';

const CreateAccountScreen = () => {
  const {
    onTermsOfServicePress,
    formik: {values, handleSubmit, handleChange, handleBlur, errors, touched},
    submitDisabled,
    isLoading,
  } = useCreateAccountScreen();

  return (
    <KeyboardAvoidingView>
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <TextInput
            testID="first-name-input"
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            iconName="PersonCircle"
            placeholder="First Name"
            autoCapitalize="words"
            containerStyle={styles.textInput}
            autoCorrect={false}
            {...(errors.firstName &&
              touched.firstName && {errorMessage: errors.firstName})}
          />
          <TextInput
            testID="last-name-input"
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            iconName="PersonCircle"
            placeholder="Last Name"
            autoCapitalize="words"
            containerStyle={styles.textInput}
            autoCorrect={false}
            {...(errors.lastName &&
              touched.lastName && {errorMessage: errors.lastName})}
          />
          <TextInput
            testID="email-input"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            iconName="Envelope"
            placeholder="Email Address"
            containerStyle={styles.textInput}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            {...(errors.email && touched.email && {errorMessage: errors.email})}
          />
          <TextInput
            testID="password-input"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            iconName="Lock"
            placeholder="Password"
            containerStyle={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            returnKeyType="done"
            onSubmitEditing={() => handleSubmit()}
            {...(errors.password &&
              touched.password && {errorMessage: errors.password})}
          />
        </View>

        <SafeAreaView edges={['bottom']} style={styles.footer}>
          <Text style={styles.disclaimer}>
            By creating this account, I agree that I am a U.S. resident, 18
            years or older with a valid bank account. I agree to Goalsetter’s{' '}
            <Text onPress={onTermsOfServicePress}>Terms of Service</Text>
          </Text>
          <Button
            testID="create-account-button"
            text="CREATE FREE ACCOUNT"
            onPress={() => handleSubmit()}
            disabled={submitDisabled}
            isLoading={isLoading}
            style={styles.createAccountButton}
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export {CreateAccountScreen};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  formContainer: {
    paddingHorizontal: 12,
    width: '100%',
    marginTop: 24,
  },
  textInput: {
    marginBottom: 25,
  },
  footer: {
    width: '100%',
    paddingBottom: 16,
  },
  disclaimer: {
    textAlign: 'center',
    color: COLORS.TEXT.TERTIARY,
    marginBottom: 25,
  },
  createAccountButton: {
    width: PlatformUtils.SCREEN_WIDTH * 0.7,
    alignSelf: 'center',
  },
});
