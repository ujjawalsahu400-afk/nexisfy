import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../components/common/Button';

const ONBOARDING_DATA = [
  {
    id: 1,
    title: "Your Personal AI Teacher",
    description: "Learn concepts faster with our subject-specific AI experts available 24/7.",
    image: null, // Placeholder for image
  },
  {
    id: 2,
    title: "Generate Notes Instantly",
    description: "Upload PDFs or topics and get detailed notes, summaries, and mind maps in seconds.",
    image: null,
  },
  {
    id: 3,
    title: "Learn, Revise & Top Exams",
    description: "Prepare for competitive exams with AI-powered mock tests and personalized tracking.",
    image: null,
  }
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace('/welcome');
    }
  };

  const currentData = ONBOARDING_DATA[currentIndex];

  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <View className="flex-1 px-6 justify-center items-center">
        {/* Placeholder for Illustration */}
        <View className="w-64 h-64 bg-primary/10 rounded-full items-center justify-center mb-12">
           <View className="w-48 h-48 bg-primary/20 rounded-full" />
        </View>

        <Text className="text-3xl font-poppins-bold text-slate-900 text-center mb-4">
          {currentData.title}
        </Text>

        <Text className="text-lg font-inter text-slate-600 text-center mb-12 px-4">
          {currentData.description}
        </Text>

        <View className="flex-row mb-12">
          {ONBOARDING_DATA.map((_, index) => (
            <View
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? 'bg-primary w-6' : 'bg-slate-300'}`}
            />
          ))}
        </View>

        <Button
          title={currentIndex === ONBOARDING_DATA.length - 1 ? "Get Started" : "Next"}
          onPress={handleNext}
          className="w-full"
        />

        {currentIndex < ONBOARDING_DATA.length - 1 && (
          <TouchableOpacity onPress={() => router.replace('/welcome')} className="mt-6">
            <Text className="text-slate-500 font-poppins-medium">Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
