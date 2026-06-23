import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { ChevronLeft } from 'lucide-react-native';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // TODO: Implement register logic with Clerk
    router.replace('/(main)');
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <ScrollView className="flex-1 px-6">
        <TouchableOpacity onPress={() => router.back()} className="mt-4 mb-8">
          <ChevronLeft size={28} color="#1E293B" />
        </TouchableOpacity>

        <Text className="text-3xl font-poppins-bold text-slate-900 mb-2">Create Account</Text>
        <Text className="text-slate-500 font-inter mb-10">Start your journey to becoming a topper.</Text>

        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Input
          label="Email Address"
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          label="Password"
          placeholder="Create a password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View className="mb-8">
          <Text className="text-slate-500 text-xs font-inter">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>

        <Button title="Create Account" onPress={handleRegister} className="w-full mb-8" />

        <View className="flex-row justify-center items-center">
          <Text className="text-slate-600 font-inter">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text className="text-primary font-poppins-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
