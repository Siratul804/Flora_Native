import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import mew from "../../assets/mew.jpg";
import CustomButton from "../components/CustomButton";
import { Link, router } from "expo-router";
const Profile = () => {
  return (
    <SafeAreaView className="bg-[#000000] h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View>
          <Image
            source={mew}
            className="w-[50vh] h-[60vh]"
            resizeMode="contain"
          />
        </View>
        <View className="mt-2">
          <Text className="text-[18px] text-white font-bold text-center ">
            {/* Log In With <Text className="text-orange-400">Flora</Text> */}
            By Creating A Profile Discover More !
          </Text>
        </View>
        <View className="w-full flex justify-center items-center px-4">
          <CustomButton
            title=" Login"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
        <View className="mt-8">
          <Text className="text-sm text-white font-bold text-center ">
            Have't create an account ? {""}
            <Link href="/sign-up" className="text-orange-400">
              Sign Up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
