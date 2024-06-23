import { ScrollView, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
    <SafeAreaView className="bg-black h-full p-4 ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="">
          <SearchInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
