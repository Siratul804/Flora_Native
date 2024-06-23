import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <View>
      <View className="w-full h-16 px-8 bg-[#212129] rounded-2xl border-2 border-[#212129] flex flex-row  items-center">
        <TextInput
          className="text-white text-base w-full"
          value={search}
          onChangeText={setSearch}
          placeholder="Search With Tags"
          placeholderTextColor="#7B7B8B"
        />

        <EvilIcons name="search" size={24} color="white" />
      </View>
    </View>
  );
};

export default SearchInput;
