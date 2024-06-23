import { ScrollView, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const BookMark = () => {
  return (
    <SafeAreaView className="bg-black h-full p-4 ">
      <ScrollView contentContainerStyle={{ height: "100%" }}></ScrollView>
    </SafeAreaView>
  );
};

export default BookMark;
