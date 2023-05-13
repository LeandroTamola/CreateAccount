import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, SvgImage, Text} from '@src/components';
import {COLORS} from '@src/constants';
import {useLoginContext} from '@src/context/UserContext';

const LinkYourBankScreen = () => {
  const {setLogOut} = useLoginContext();
  return (
    <ScrollView
      style={styles.scrollView}
      bounces={false}
      contentContainerStyle={styles.contentContainerStyle}
      showsHorizontalScrollIndicator={false}>
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

        <Button text="LINK A BANK" onPress={() => setLogOut()} />
      </SafeAreaView>
    </ScrollView>
  );
};

export {LinkYourBankScreen};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: COLORS.WHITE,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
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
