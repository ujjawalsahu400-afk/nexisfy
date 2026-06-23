import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { ChevronLeft } from 'lucide-react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic with Clerk
    router.replace('/(main)');
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <ScrollView className="flex-1 px-6">
        <TouchableOpacity onPress={() => router.back()} className="mt-4 mb-8">
          <ChevronLeft size={28} color="#1E293B" />
        </TouchableOpacity>

        <Text className="text-3xl font-poppins-bold text-slate-900 mb-2">Welcome Back!</Text>
        <Text className="text-slate-500 font-inter mb-10">Sign in to continue your learning journey.</Text>

        <Input
          label="Email Address"
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity className="self-end mb-8">
          <Text className="text-primary font-poppins-medium">Forgot Password?</Text>
        </TouchableOpacity>

        <Button title="Login" onPress={handleLogin} className="w-full mb-8" />

        <View className="flex-row justify-center items-center">
          <Text className="text-slate-600 font-inter">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text className="text-primary font-poppins-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
