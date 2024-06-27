import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";

const images = {
  image1: require("../../assets/floras/2.jpg"),
  image2: require("../../assets/floras/6.jpg"),
  image3: require("../../assets/floras/5.jpg"),
  image4: require("../../assets/floras/4.jpg"),
  image5: require("../../assets/floras/3.jpg"),
  image6: require("../../assets/floras/7.jpg"),
};

const data = [
  {
    prompt: "A Dreamy Black Cat",
    tags: ["Dreamy", "Night"],
    mark: "Off",
    image: images.image1,
  },
  {
    prompt: "Stained Angry Cat",
    tags: ["Stained"],
    mark: "On",
    image: images.image2,
  },
  {
    prompt: "A Cute Cat",
    tags: ["Psycheelic"],
    mark: "On",
    image: images.image3,
  },
  {
    prompt: "A Black Cat",
    tags: ["Dreamy", "Night"],
    mark: "Off",
    image: images.image4,
  },
  {
    prompt: "A cat is sitting peacefully",
    tags: ["Dark", "Night"],
    mark: "Off",
    image: images.image5,
  },
  {
    prompt: "Aggressive Angry Cat",
    tags: ["Retrowave"],
    mark: "On",
    image: images.image6,
  },
];

const BookMark = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImagePress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
    console.log(selectedItem, modalVisible);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item)}>
      <View>
        <View className="pt-4">
          <Image
            source={item.image}
            className="rounded-2xl h-[25vh] w-[22vh]"
          />
          <Text className="text-white text-[12px] text-center p-1 font-bold ">
            {item.prompt}
          </Text>
          <Text className="inline-block text-center bg-[#212129] text-white text-[10px] font-medium py-1 px-3 rounded-2xl">
            {" "}
            #{item.tags.join("  #")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="bg-black h-full p-4">
      <View className="mt-5">
        <Text className="text-2xl text-white font-bold text-center mb-4">
          Bookmark Models
        </Text>
      </View>
      <View className="mt-0">
        <View className="">
          <FlatList
            data={data.filter((item) => item.mark === "On")}
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
      {selectedItem && (
        <ModalComponent
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          imageUri={Image.resolveAssetSource(selectedItem.image).uri}
          prompt={selectedItem.prompt}
          tags={selectedItem.tags}
          bookmark={selectedItem.mark}
        />
      )}
    </SafeAreaView>
  );
};

export default BookMark;
