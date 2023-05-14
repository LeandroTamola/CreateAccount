import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {TextInput, TextInputProps} from '../TextInput';
import {COLORS} from '@src/constants';

const mockedValue = 'mockedValue';
const mockedPlaceholder = 'mockedPlaceholder';
const mockedErrorMessage = 'mockedErrorMessage';
const textInputTestId = 'text-input';

const renderComponent = (props?: TextInputProps) => {
  return render(
    <TextInput
      testID={textInputTestId}
      value={mockedValue}
      placeholder={mockedPlaceholder}
      {...props}
    />,
  );
};

describe('TextInput', () => {
  it('should render correctly', () => {
    renderComponent();

    const placeholder = screen.getByText('mockedPlaceholder');
    const textInputWrapper = screen.getByTestId('text-input-wrapper');
    const textInput = screen.getByTestId(textInputTestId);

    expect(placeholder).toBeDefined();
    expect(textInputWrapper.props.style.borderBottomColor).toEqual(
      COLORS.TEXT.SECONDARY,
    );
    expect(textInput.props.value).toEqual(mockedValue);
  });
  it('should render with the correct style if errorMessage is passed', () => {
    renderComponent({errorMessage: mockedErrorMessage});
    const textInputWrapper = screen.getByTestId('text-input-wrapper');

    expect(textInputWrapper.props.style.borderBottomColor).toEqual(
      COLORS.ERROR,
    );
  });
});
