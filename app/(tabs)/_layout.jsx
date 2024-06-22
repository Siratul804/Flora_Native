import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 1,
          borderTopColor: "black",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <FontAwesome size={28} name="home" color={color} />
              <Text className="font-bold" style={{ color: color }}>
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarShowLabel: false,
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <FontAwesome name="bookmark" size={28} color={color} />
              <Text className="font-bold" style={{ color: color }}>
                Bookmark
              </Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarShowLabel: false,
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <Ionicons name="create" size={28} color={color} />
              <Text className="font-bold" style={{ color: color }}>
                Create
              </Text>
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <MaterialIcons name="person" size={28} color={color} />
              <Text className="font-bold" style={{ color: color }}>
                Profile
              </Text>
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
