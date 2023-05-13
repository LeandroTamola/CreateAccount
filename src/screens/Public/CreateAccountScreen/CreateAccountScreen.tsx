import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text} from '@src/components/Text';
import {Button} from '@src/components/Button';
import {useNavigation} from '@react-navigation/native';
import {PublicNavigatorProps} from '@src/navigators/PublicNavigator/types';
import {COLORS} from '@src/constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useLoginContext} from '@src/context/UserContext';

const CreateAccountScreen = () => {
  const navigation = useNavigation<PublicNavigatorProps>();
  const {setLoginStatus} = useLoginContext();

  const createAccount = () => {
    setLoginStatus({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@fakeemail.com',
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <Text></Text>
      <SafeAreaView edges={['bottom']} style={styles.footer}>
        <Text style={styles.disclaimer}>
          By creating this account, I agree that I am a U.S. resident, 18 years
          or older with a valid bank account. I agree to Goalsetter’s{' '}
          <Text onPress={() => navigation.navigate('TermsOfServices')}>
            Terms of Service
          </Text>
        </Text>
        <Button text="CREATE FREE ACCOUNT" onPress={createAccount} />
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
    paddingHorizontal: 16,
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
