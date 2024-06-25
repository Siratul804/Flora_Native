import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";

import image1 from "../../assets/floras/1.jpg";
import image2 from "../../assets/floras/2.jpg";
import image3 from "../../assets/floras/3.jpg";
import image4 from "../../assets/floras/4.jpg";

const data = [
  {
    prompt: "Black Cat Gloomy",
    tags: ["Dark", "Night"],
    mark: "On",
    image: image1,
  },
  {
    prompt: "White Cat Aesthetic",
    tags: ["Dark", "Night"],
    mark: "Off",
    image: image2,
  },
  {
    prompt: "A Simple Cat",
    tags: ["Light", "Clear"],
    mark: "Off",
    image: image3,
  },
  {
    prompt: "Party Look Aggressive",
    tags: ["Dark", "Party"],
    mark: "On",
    image: image4,
  },
  {
    prompt: "Black Cat Gloomy",
    tags: ["Dark", "Night"],
    mark: "On",
    image: image1,
  },
  {
    prompt: "White Cat Aesthetic",
    tags: ["Dark", "Night"],
    mark: "Off",
    image: image2,
  },
  {
    prompt: "A Simple Cat",
    tags: ["Light", "Clear"],
    mark: "Off",
    image: image3,
  },
  {
    prompt: "Party Look Aggressive",
    tags: ["Dark", "Party"],
    mark: "On",
    image: image4,
  },
];

const Home = () => {
  const renderItem = ({ item }) => (
    <View className="p-4">
      <Image source={item.image} className="rounded-2xl h-[18vh] w-[18vh]  " />
      <Text className="text-white text-[12px] text-center p-1 font-bold ">
        {item.prompt}
      </Text>
      <Text className="inline-block text-center bg-[#212129] text-white text-[10px] font-medium py-1 px-3 rounded-2xl">
        {" "}
        #{item.tags.join("  #")}
      </Text>
      {/* <Text className="text-white">Mark: {item.mark}</Text> */}
    </View>
  );

  return (
    <SafeAreaView className="bg-black h-full p-4">
      <View className="mt-4">
        <SearchInput />
        <View className="">
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
