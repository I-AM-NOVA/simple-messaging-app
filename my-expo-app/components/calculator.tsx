import { View, Text, TextInput, Pressable } from "react-native";

export default function Calculator() {
  return (
    <View className="flex-1 bg-black items-center justify-center p-4">
      {/* Input Field */}
      <TextInput
        className="w-full h-14 bg-white text-black text-lg rounded-lg px-4 mb-6"
        placeholder="Type something..."
        placeholderTextColor="#666"
      />

      {/* Buttons Grid */}
      <View className="flex-row flex-wrap justify-center gap-3">
        {["1","2","3","4","5","6","7","8","9","+","-","="].map((label, i) => (
          <CalculatorButton key={i} label={label} onPress={() => console.log(`Pressed ${label}`)} />
        ))}
      </View>
    </View>
  );
}

function CalculatorButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-black border border-white w-16 h-16 items-center justify-center rounded-lg"
    >
      <Text className="text-white text-2xl font-bold">{label}</Text>
    </Pressable>
  );
}

// also note for the entirety of the project theme is ehite on black 
// don't complete code just fix the ui
// remember do not change code context or logic just ui upgrade