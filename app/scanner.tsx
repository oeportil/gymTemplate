import useCamera from "@/hooks/useCamera";
import { CameraView } from "expo-camera";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

interface Gym {
  createdAt: string;
  deleted: boolean;
  id: number;
  logo: string;
  name: string;
  phone: string;
  planId: number;
  primaryColor: string;
  secondaryColor: string;
  slug: string;
  status: boolean;
  tertiaryColor: string;
  updatedAt: string;
}

const index = () => {
  const { saveAssitance } = useCamera();

  return (
    <>
      <View
        className="h-screen flex justify-center bg-black"
        style={{ flex: 1 }}
      >
        <Stack.Screen
          options={{
            title: "Overview",
            headerShown: false,
          }}
        />

        {Platform.OS === "android" ? <StatusBar hidden /> : null}
        <Text className="text-white text-center text-lg">
          Escanea el codigo QR
        </Text>
        <View className="h-92 flex items-center justify-center m-8 border-primary border">
          <CameraView
            style={StyleSheet.absoluteFillObject}
            facing="back"
            onBarcodeScanned={({ data }) =>
              saveAssitance((JSON.parse(data) as Gym).slug)
            }
          />
        </View>
      </View>
    </>
  );
};

export default index;
