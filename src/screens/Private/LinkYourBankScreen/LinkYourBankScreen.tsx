import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button} from '@src/components/Button';
import {SvgImage} from '@src/components/SvgImage';
import {Text} from '@src/components/Text';
import {COLORS} from '@src/constants';

const LinkYourBankScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.bodyContainer}>
        <SvgImage
          name="LinkYourBankIllustration"
          type="illustration"
          style={styles.illustration}
        />
        <Text variant="lg" bold style={styles.title}>
          Family banking
        </Text>
        <Text style={styles.description}>
          Linking your bank lets you use all of Goalsetter’s amazing features.
          Every member of your family can save, gift, learn, earn, and spend
          money... smartly.
        </Text>
      </View>

      <Button text="LINK A BANK" />
    </SafeAreaView>
  );
};

export {LinkYourBankScreen};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 16,
  },
  bodyContainer: {
    alignItems: 'center',
  },
  illustration: {
    marginBottom: 25,
  },
  title: {
    color: COLORS.SECONDARY.DARK,
    marginBottom: 53,
  },
  description: {
    textAlign: 'center',
  },
});
