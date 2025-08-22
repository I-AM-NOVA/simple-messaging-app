// SearchUser.tsx
import React from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { getUserID, initSocket } from  "./service/socketservice"

const userID = getUserID()
initSocket()
const ProfileData = () => {
  return (
    <View className="flex-1 bg-white p-4">
        <Pressable>Profile Page</Pressable>
        <View>{userID}</View>
        <Text>Name: { '{name}' }</Text>
        <Text>Username: { '{username}' }</Text>
        <Text>User ID: <View>{userID}</View></Text>
        <Pressable onPress={initSocket}>HEY</Pressable>
        <Text>Note UID is dynamic and changes once application is refreshed</Text>
           </View>
  );
};

export default ProfileData;
