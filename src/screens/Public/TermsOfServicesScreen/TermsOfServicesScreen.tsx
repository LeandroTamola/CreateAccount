import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import {SvgImage, Text} from '@src/components';
import {COLORS} from '@src/constants';

const TermsOfServicesScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.contentContainerStyle}
      showsHorizontalScrollIndicator={false}>
      <SvgImage
        name="TermsOfServicesIllustration"
        type="illustration"
        style={styles.illustration}
      />
      <View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={styles.description}>
          1. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.n. .
        </Text>
        <Text style={styles.description}>
          2. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </Text>
        <Text style={styles.description}>
          3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
    </ScrollView>
  );
};

export {TermsOfServicesScreen};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
  },
  illustration: {
    marginBottom: 54,
  },
  description: {
    marginBottom: 24,
  },
});
