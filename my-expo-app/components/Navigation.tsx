// Navigation.tsx
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './chatScreen'
import calculator from './calculator'
import ProfileScreen from './ProfileScreen'

// import { View, Text, TouchableOpacity } from 'react-native';

//node add image 
//note upgraded ui
export function Library({ navigation }: any) {
  return (
    <View className="flex-1 bg-black p-6">
      {/* Title */}
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-3xl font-bold tracking-wide">
          Home
        </Text>
      </View>

      {/* Buttons */}
      <View className="pb-10">
        <TouchableOpacity
          className="mb-4 border border-white rounded-full py-3 items-center active:opacity-70"
          onPress={() => navigation.navigate('Home', { id: 1 })}
        >
          <Text className="text-white text-lg font-semibold">
            Go to Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mfontb-4 border border-white rounded-full py-3 items-center active:opacity-70"
          onPress={() => navigation.navigate('calculator', { id: 2 })}
        >
          <Text className="text-white text-lg font-semibold">
            Go to Calculator
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-white rounded-full py-3 items-center active:opacity-70"
          onPress={() => navigation.navigate('Profile', { id: 3 })}
        >
          <Text className="text-white text-lg font-semibold">
            Go to Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Library">
        <Stack.Screen name="Library" component={Library}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="calculator" component={calculator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}