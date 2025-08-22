// SearchUser.tsx
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
const SearchUser: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const handleSearch = () => {
    
    // TODO: Implement search logic here
    console.log('Searching for:', query);
  
  };
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-semibold mb-3">Search for a User</Text>  
      <TextInput
        className="border border-gray-300 rounded p-2 mb-3"
        placeholder="Enter username or ID"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};
export default SearchUser;