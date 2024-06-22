import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import mew from "../assets/mew.jpg";
import CustomButton from "./components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={mew}
            className="w-[50vh] h-[45vh]"
            resizeMode="contain"
          />
          <View className="mt-4">
            <Text className="text-3xl text-white font-bold text-center">
              Discover the Hidden Beauty {"\n"} of Cats With{" "}
              <Text className="text-orange-400 ">Flora</Text>
            </Text>
          </View>
          <View className="pr-8 pl-8 ">
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Flora
            </Text>
          </View>
          <CustomButton
            title="Let's Start"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
