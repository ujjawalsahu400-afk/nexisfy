import React from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';
import { styled } from 'nativewind';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

const StyledTextInput = styled(TextInput);
const StyledView = styled(View);
const StyledText = styled(Text);

export const Input: React.FC<InputProps> = ({
  label,
  error,
  containerClassName = '',
  ...props
}) => {
  return (
    <StyledView className={`mb-4 ${containerClassName}`}>
      {label && (
        <StyledText className="text-slate-700 font-poppins-medium mb-1.5 ml-1">
          {label}
        </StyledText>
      )}
      <StyledTextInput
        className={`bg-slate-50 border ${error ? 'border-error' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-slate-900 font-inter`}
        placeholderTextColor="#94A3B8"
        {...props}
      />
      {error && (
        <StyledText className="text-error text-xs mt-1 ml-1 font-inter">
          {error}
        </StyledText>
      )}
    </StyledView>
  );
};
