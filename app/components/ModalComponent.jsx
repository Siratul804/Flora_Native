// components/ModalComponent.js
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import * as FileSystem from "expo-file-system";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ModalComponent = ({
  isVisible,
  onClose,
  imageUri,
  prompt,
  tags,
  bookmark,
}) => {
  const downloadImage = async () => {
    Alert.alert("Image Download Successfully !");
    const fileUri = FileSystem.documentDirectory + imageUri.split("/").pop();
    await FileSystem.downloadAsync(imageUri, fileUri)

      .then(({ uri }) => {
        console.log("Finished downloading to ", uri);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const bookMark = () => {
    Alert.alert(" Image Added to Bookmark !");
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <View className="pb-4">
          <Text className="text-white text-[12px] " style={styles.tags}>
            Tags : #{tags.join("  #")}
          </Text>
        </View>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View className="pb-4">
          <Text className="text-white text-[12px] font-bold">{prompt}</Text>
        </View>

        <TouchableOpacity
          onPress={downloadImage}
          activeOpacity={0.7}
          className="bg-orange-400 rounded-md h-[5vh] w-[26vh] flex items-center justify-center flex-row "
        >
          <Text className="font-bold pr-1 ">Download</Text>
          <Feather name="download" size={20} color="black" />
        </TouchableOpacity>

        {bookmark === "Off" ? (
          <>
            <TouchableOpacity
              onPress={bookMark}
              activeOpacity={0.7}
              className="bg-orange-400 rounded-md mt-2 h-[5vh] w-[26vh] flex items-center justify-center flex-row "
            >
              <Text className="font-bold pr-1 ">Bookmark</Text>
              <Ionicons name="bookmark-outline" size={20} color="black" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={bookMark}
              activeOpacity={0.7}
              className="bg-orange-400 rounded-md mt-2 h-[5vh] w-[26vh] flex items-center justify-center flex-row "
            >
              <Text className="font-bold pr-1 ">Bookmark</Text>
              <Ionicons name="bookmark" size={24} color="black" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "black",
    padding: 60,
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default ModalComponent;
