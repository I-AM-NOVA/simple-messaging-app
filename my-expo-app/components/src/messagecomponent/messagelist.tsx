import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { initSocket, onMessageReceived, getUserID } from "../service/socketservice"

export default function Messagelist() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    initSocket(); // starts connect funct should add to home page

    // Listen for msg(s) from server
    onMessageReceived((msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);
let userID = getUserID();
  return (
    <View>
            <View className="bg-white rounded-[5px] mt-2 shadow p-3 self-start max-w-[80%]">
                      <View> <Text>Your UserID: </Text>{userID}</View>

            <View className="space-y-4">
                {messages.map((msg, i) => (
                <View key={i} className="p-3 bg-gray-100 rounded">
                    <Text>{msg}</Text>
                </View>
                 ))}
            </View>
          </View>

    </View>
  );
}
