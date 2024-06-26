import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";

import image1 from "../../assets/floras/2.jpg";
import image2 from "../../assets/floras/3.jpg";
import image3 from "../../assets/floras/4.jpg";
import image4 from "../../assets/floras/5.jpg";
import image5 from "../../assets/floras/6.jpg";
import image6 from "../../assets/floras/7.jpg";

const data = [
  {
    prompt: "A Dreamy Black Cat",
    tags: ["Dreamy", "Night"],
    mark: "On",
    image: image1,
  },
  {
    prompt: "Stained Angry Cat",
    tags: ["Stained"],
    mark: "On",
    image: image5,
  },
  {
    prompt: "A Cute Cat",
    tags: ["Psycheelic"],
    mark: "On",
    image: image4,
  },

  {
    prompt: "A Black Cat",
    tags: ["Dreamy", "Night"],
    mark: "Off",
    image: image3,
  },
  {
    prompt: "A cat is sitting peacefully",
    tags: ["Dark", "Night"],
    mark: "Off",
    image: image2,
  },
  {
    prompt: "Aggressive Angry Cat",
    tags: ["Retrowave"],
    mark: "Off",
    image: image6,
  },
];

const Home = () => {
  const renderItem = ({ item }) => (
    <View>
      <View className="pt-4">
        <Image
          source={item.image}
          className="rounded-2xl h-[25vh] w-[22vh]  "
        />
        <Text className="text-white text-[12px] text-center p-1 font-bold ">
          {item.prompt}
        </Text>
        <Text className="inline-block text-center bg-[#212129] text-white text-[10px] font-medium py-1 px-3 rounded-2xl">
          {" "}
          #{item.tags.join("  #")}
        </Text>
        {/* <Text className="text-white">Mark: {item.mark}</Text> */}
      </View>
    </View>
  );

  return (
    <SafeAreaView className="bg-black h-full p-4">
      <View className="mt-0">
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
            contentContainerStyle={{
              paddingBottom: 120,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
