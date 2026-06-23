import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../components/common/Button';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <View className="flex-1 px-6 justify-between py-12">
        <View className="items-center mt-12">
          <View className="w-20 h-20 bg-primary rounded-2xl items-center justify-center mb-6">
            <Text className="text-white text-4xl font-poppins-bold">T</Text>
          </View>
          <Text className="text-4xl font-poppins-bold text-slate-900">Topper AI</Text>
          <Text className="text-slate-500 font-inter mt-2">Learn Smarter, Score Better</Text>
        </View>

        <View>
          <Button
            title="Continue with Google"
            variant="outline"
            onPress={() => {}} // TODO: Google Auth
            className="mb-4"
            // icon={<Image source={require('../../assets/images/google-icon.png')} className="w-5 h-5" />}
          />
          <Button
            title="Login"
            onPress={() => router.push('/login')}
            className="mb-4"
          />
          <View className="flex-row justify-center items-center">
            <Text className="text-slate-600 font-inter">Don't have an account? </Text>
            <Button
              title="Sign Up"
              variant="ghost"
              size="sm"
              onPress={() => router.push('/register')}
              className="px-0 py-0"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
