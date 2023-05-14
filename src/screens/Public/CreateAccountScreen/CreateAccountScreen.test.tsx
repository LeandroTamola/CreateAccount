import React from 'react';
import {testableComponentSetup} from '../../../../.config/jest/testableComponentSetup';
import {CreateAccountScreen} from './CreateAccountScreen';
import {screen, fireEvent, waitFor} from '@testing-library/react-native';

const renderComponent = () => {
  return testableComponentSetup({Component: <CreateAccountScreen />});
};

const queryFormElementsById = () => {
  const firstNameInput = screen.getByTestId('first-name-input');
  const lastNameInput = screen.getByTestId('last-name-input');
  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');
  const createAccountButton = screen.getByTestId('create-account-button');

  return {
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
    createAccountButton,
  };
};

describe('CreateAccountScreen', () => {
  it('renders correctly & button is disabled if form is empty', () => {
    renderComponent();
    const {
      emailInput,
      firstNameInput,
      lastNameInput,
      passwordInput,
      createAccountButton,
    } = queryFormElementsById();

    expect(firstNameInput.props.value).toEqual('');
    expect(lastNameInput.props.value).toEqual('');
    expect(emailInput.props.value).toEqual('');
    expect(passwordInput.props.value).toEqual('');
    expect(createAccountButton).toBeDisabled();
  });
  it('should enable create account button if form is filled', async () => {
    renderComponent();
    const {
      emailInput,
      firstNameInput,
      lastNameInput,
      passwordInput,
      createAccountButton,
    } = queryFormElementsById();

    fireEvent.changeText(firstNameInput, 'John');
    fireEvent.changeText(lastNameInput, 'Doe');
    fireEvent.changeText(emailInput, 'john.doe@test.com');
    fireEvent.changeText(passwordInput, '12345678');

    await waitFor(() => {
      expect(createAccountButton).not.toBeDisabled();
    });
  });
  it('should have a disabled create account button if one input is empty', async () => {
    renderComponent();
    const {firstNameInput, lastNameInput, passwordInput, createAccountButton} =
      queryFormElementsById();

    fireEvent.changeText(firstNameInput, 'John');
    fireEvent.changeText(lastNameInput, 'Doe');
    //email is empty
    fireEvent.changeText(passwordInput, '12345678');

    await waitFor(() => {
      expect(createAccountButton).toBeDisabled();
    });
  });
});
