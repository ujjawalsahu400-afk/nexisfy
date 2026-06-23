import React from 'react';
import { View, ViewProps } from 'react-native';
import { styled } from 'nativewind';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

const StyledView = styled(View);

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <StyledView
      className={`bg-white rounded-2xl p-4 shadow-sm border border-slate-100 ${className}`}
      {...props}
    >
      {children}
    </StyledView>
  );
};
