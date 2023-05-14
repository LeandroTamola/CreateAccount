import React from 'react';
import {testableComponentSetup} from '../../../../.config/jest/testableComponentSetup';
import {LinkYourBankScreen} from './LinkYourBankScreen';
import {screen} from '@testing-library/react-native';

describe('LinkYourBankScreen', () => {
  it('renders correctly', () => {
    testableComponentSetup({Component: <LinkYourBankScreen />});
    screen.getByTestId('link-your-bank-illustration');
    screen.getByText('Family banking');
    screen.getByText(
      'Linking your bank lets you use all of Goalsetter’s amazing features. Every member of your family can save, gift, learn, earn, and spend money... smartly.',
    );
    screen.getByText('LINK A BANK');
  });
});
