import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from '../../components/common/Card';
import { BookOpen, Brain, MessageSquare, Trophy, User, Bell } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <ScrollView className="flex-1 px-6 pt-4">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-slate-500 font-inter">Hello,</Text>
            <Text className="text-2xl font-poppins-bold text-slate-900">Future Topper 👋</Text>
          </View>
          <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm border border-slate-100">
            <Bell size={24} color="#4F46E5" />
          </TouchableOpacity>
        </View>

        {/* Stats Card */}
        <Card className="flex-row justify-between items-center mb-8 bg-primary">
          <View className="items-center flex-1">
            <Text className="text-white/80 text-xs font-inter mb-1">XP</Text>
            <Text className="text-white text-xl font-poppins-bold">120</Text>
          </View>
          <View className="w-[1] h-8 bg-white/20" />
          <View className="items-center flex-1">
            <Text className="text-white/80 text-xs font-inter mb-1">Coins</Text>
            <Text className="text-white text-xl font-poppins-bold">50</Text>
          </View>
          <View className="w-[1] h-8 bg-white/20" />
          <View className="items-center flex-1">
            <Text className="text-white/80 text-xs font-inter mb-1">Streak</Text>
            <Text className="text-white text-xl font-poppins-bold">3</Text>
          </View>
        </Card>

        {/* Quick Actions */}
        <Text className="text-xl font-poppins-bold text-slate-900 mb-4">Quick Actions</Text>
        <View className="flex-row flex-wrap justify-between">
          <QuickActionItem icon={<MessageSquare size={24} color="#4F46E5" />} label="AI Teacher" />
          <QuickActionItem icon={<BookOpen size={24} color="#7C3AED" />} label="Notes" />
          <QuickActionItem icon={<Brain size={24} color="#06B6D4" />} label="Mind Map" />
          <QuickActionItem icon={<Trophy size={24} color="#F59E0B" />} label="Quiz" />
        </View>

        {/* Continue Learning */}
        <Text className="text-xl font-poppins-bold text-slate-900 mt-8 mb-4">Continue Learning</Text>
        <Card className="mb-4">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-primary/10 rounded-xl items-center justify-center mr-4">
              <BookOpen size={24} color="#4F46E5" />
            </View>
            <View className="flex-1">
              <Text className="font-poppins-medium text-slate-900">Quantum Physics</Text>
              <Text className="text-slate-500 text-xs">Module 3: Wave Mechanics</Text>
            </View>
            <View className="bg-primary/10 px-3 py-1 rounded-full">
              <Text className="text-primary text-xs font-poppins-medium">60%</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function QuickActionItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <TouchableOpacity className="w-[48%] mb-4">
      <Card className="items-center py-6">
        <View className="mb-3">{icon}</View>
        <Text className="font-poppins-medium text-slate-800">{label}</Text>
      </Card>
    </TouchableOpacity>
  );
}
