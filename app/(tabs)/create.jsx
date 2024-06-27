import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { styled } from "nativewind";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import { MaterialIcons } from "@expo/vector-icons";
import { createPost, getPosts } from "../api";

import CustomButton from "../components/CustomButton";

const Create = () => {
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(tags, image, prompt, mark);

  const mark = "Off";

  const handleSubmit = async () => {
    try {
      await createPost({ prompt, tags, mark, image });
      // fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmit = async () => {
  //   console.log(image, tags, prompt, mark);
  // };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="bg-black h-full p-4">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className=" pt-10 ">
          <Text className="text-2xl text-white font-bold text-center mb-4">
            Create Your AI Generated Model :
          </Text>

          <View className="mt-2">
            <Text className="text-white p-2 text-md font-bold">
              Write Prompt:
            </Text>
            <View className="w-full h-16 px-6 bg-[#212129] rounded-2xl border-2 border-[#212129] flex flex-row items-center">
              <TextInput
                className="text-white text-base w-full"
                placeholder="Enter your prompt"
                placeholderTextColor="#7B7B8B"
                value={prompt}
                onChangeText={setPrompt}
              />
            </View>
          </View>

          <View className="mt-4">
            <Text className="text-white p-2 text-md font-bold">
              Select Tag:
            </Text>
            <View className="w-full h-16 px-2 bg-[#212129] rounded-2xl border-2 border-[#212129] flex flex-row items-center">
              <View style={pickerSelectStyles.inputAndroid}>
                <RNPickerSelect
                  onValueChange={(value) => setTags(value)}
                  items={[
                    { label: "Dark", value: "Dark" },
                    { label: "Light", value: "Light" },
                  ]}
                  style={pickerSelectStyles}
                />
              </View>
            </View>
          </View>

          <View className="mt-4">
            {image ? (
              <>
                <View className="mt-4">
                  <Text className="text-white p-2 text-md font-bold">
                    Selected Image:
                  </Text>
                  <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Image source={{ uri: image }} style={styles.image} />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <Text className="text-white p-2 text-md font-bold">
                  Select Your Image:
                </Text>
                <TouchableOpacity style={styles.button} onPress={pickImage}>
                  <Text style={styles.buttonText}>
                    <MaterialIcons
                      name="add-photo-alternate"
                      size={50}
                      color="white"
                    />
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
          {/* {image && (
          <View className="mt-4">
            <Text className="text-white p-2 text-md font-bold">
              Selected Image:
            </Text>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        )} */}
          <CustomButton
            handlePress={handleSubmit}
            title="Create"
            containerStyles="mt-4"
          />
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

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#212129",
    padding: 15,
    height: 220,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default styled(Create);
