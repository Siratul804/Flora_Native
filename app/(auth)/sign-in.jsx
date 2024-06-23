import { ScrollView, Text, View, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Alert.alert("Form Data", `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 justify-center items-center">
          <View className="mt-4">
            <Text className="text-2xl text-white font-bold text-center">
              Sign In With <Text className="text-orange-400">Flora</Text>
            </Text>
          </View>
          <View className="p-4 w-full">
            <View className="w-full h-16 px-4 bg-[#212129] rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
              <TextInput
                className="text-white text-base w-full"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#7B7B8B"
                keyboardType="email-address"
              />
            </View>
            <View className="mt-4 w-full h-16 px-4 bg-[#212129] rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
              <TextInput
                className="text-white text-base w-full"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="#7B7B8B"
                secureTextEntry
              />
            </View>
            <CustomButton
              onPress={handleSubmit}
              title="Sign In"
              containerStyles="mt-4"
            />

            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have an account?
              </Text>
              <Link href="/sign-up" className="text-lg text-orange-400">
                Signup
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
