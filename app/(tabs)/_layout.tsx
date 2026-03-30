import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Toast from "react-native-toast-message";

const _layout = () => {
  const tabs = [
    {
      name: "index",
      iconName: "home",
      label: "Home",
    },
    {
      name: "payments",
      iconName: "card",
      label: "PyS",
    },
    {
      name: "profile",
      iconName: "person",
      label: "Profile",
    },
  ];

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            margin: 20,
            borderRadius: 40,
          },
          animation: "shift",
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              animation: "shift",
              title: tab.label,
              tabBarIcon: ({ focused }) => (
                <View className="items-center justify-center">
                  {focused ? (
                    // CIRCULO FLOTANTE CUANDO ESTA ACTIVO
                    <View className="w-14 h-14 bg-primary    rounded-full items-center justify-center -mt-6 shadow-lg shadow-gray-400">
                      <Ionicons name={tab.iconName} size={22} color="white" />
                    </View>
                  ) : (
                    <Ionicons name={tab.iconName} size={22} color="#9ca3af" />
                  )}
                </View>
              ),
              tabBarLabel: ({ focused }) => (
                <Text
                  className={`text-xs ${focused ? "text-black " : "text-tertiary"}`}
                >
                  {tab.label}
                </Text>
              ),
            }}
          />
        ))}
      </Tabs>
      <Toast />
    </>
  );
};

export default _layout;
