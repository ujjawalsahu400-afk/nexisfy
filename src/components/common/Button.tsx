import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import { styled } from 'nativewind';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  icon,
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary': return 'bg-secondary';
      case 'outline': return 'border border-primary bg-transparent';
      case 'ghost': return 'bg-transparent';
      default: return 'bg-primary';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'px-3 py-1.5';
      case 'lg': return 'px-8 py-4';
      default: return 'px-6 py-3';
    }
  };

  const getTextVariantClass = () => {
    switch (variant) {
      case 'outline':
      case 'ghost': return 'text-primary';
      default: return 'text-white';
    }
  };

  const getTextSizeClass = () => {
    switch (size) {
      case 'sm': return 'text-sm';
      case 'lg': return 'text-lg';
      default: return 'text-base';
    }
  };

  return (
    <StyledTouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`rounded-xl flex-row items-center justify-center ${getVariantClass()} ${getSizeClass()} ${disabled ? 'opacity-50' : ''} ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' || variant === 'ghost' ? '#4F46E5' : 'white'} />
      ) : (
        <>
          {icon && <View className="mr-2">{icon}</View>}
          <StyledText className={`font-poppins-medium text-center ${getTextVariantClass()} ${getTextSizeClass()}`}>
            {title}
          </StyledText>
        </>
      )}
    </StyledTouchableOpacity>
  );
};
