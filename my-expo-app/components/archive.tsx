// Navigation.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }: any) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home</Text>
      
      <Button title="Go to Details" onPress={() => navigation.navigate('Details',{id:42})}/>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details',{id:42})}/>
    </View>
  );
}

function DetailsScreen({ route, navigation }: any) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Details for id: {route.params?.id}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}