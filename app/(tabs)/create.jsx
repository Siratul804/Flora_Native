import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import RNPickerSelect from "react-native-picker-select";

const Create = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <SafeAreaView className="bg-black h-full p-4">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text className="text-2xl text-white font-bold text-center mb-4">
          Create Your AI Generated Model:
        </Text>

        <View className="mt-4">
          <Text className="text-white p-2 text-md font-bold">
            Write Prompt:
          </Text>
          <View className="w-full h-16 px-6 bg-[#212129] rounded-2xl border-2 border-[#212129] flex flex-row items-center">
            <TextInput
              className="text-white text-base w-full"
              placeholder="Enter your prompt"
              placeholderTextColor="#7B7B8B"
            />
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-white p-2 text-md font-bold">Select Tag:</Text>
          <View className="w-full h-16 px-2 bg-[#212129] rounded-2xl border-2 border-[#212129] flex flex-row items-center">
            <View style={pickerSelectStyles.inputAndroid}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: "Dark", value: "Dark" },
                  { label: "Light", value: "Light" },
                  { label: "Glow", value: "Glow" },
                ]}
                style={pickerSelectStyles}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const pickerSelectStyles = {
  inputIOS: {
    color: "white",
    width: "100%",
  },
  inputAndroid: {
    color: "white",
    backgroundColor: "#212129",
    borderRadius: 16,
    height: 64,
    borderWidth: 2,
    borderColor: "#212129",
    width: "100%",
    justifyContent: "center", // Center the text vertically
  },
};

export default styled(Create);
