import { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import { initSocket, sendMessage, getUserID } from "../service/socketservice";

export default function Messagesend() {
  const [text, setText] = useState("");

  useEffect(() => {
    initSocket(); // Ensure socket is connected

  }, []);
    const handleSend = () => {
    if (text.trim() !== "") {
      sendMessage(text);  // send to server
      setText("");        // clear input
    }
  };
  let userID = getUserID()
  return (
    <View  className="flex-row">
      {/* <View>${userID}</View> */}
      <TextInput
        className="w-4/5 h-12 border border-gray-300 rounded-lg px-3 text-base"
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />
   
    <Pressable
    onPress={handleSend}
    className="bg-blue-500 w-[70px] px-4 py-2 rounded-lg ml-[10px]"
    >
        {/* add img */}
    <Text className="text-white font-bold">Send</Text>
    </Pressable>
    

    </View>
  );
}
