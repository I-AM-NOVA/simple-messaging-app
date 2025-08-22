import { View, Text, Button, TextInput } from 'react-native';
import MessageList from './src/messagecomponent/messagelist';
import Messagesend from './src/messagecomponent/messagesend';
export default function HomeScreen() {
  return (
    <>
    <View>
        {/* call user.id */}
      <Text>Chatpage</Text>
       <MessageList />
       <View className='mt-100'>
       <Messagesend />
       </View>
    </View>
    </>
  );
}
