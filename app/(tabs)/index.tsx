import useAssistance from "@/hooks/useAssitance";
import useCamera from "@/hooks/useCamera";
import useUserStore from "@/store/useUserStore";
import { formatDate, formatTime } from "@/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const { user } = useUserStore();
  const { assistances, isLoading, getAssitances } = useAssistance();
  const { openCamera } = useCamera();
  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center mx-6 mt-7 mb-3">
        <Text className="text-xl font-bold text-gray-700">
          Bienvenido {user?.firstName}
        </Text>
      </View>
      <View className="bg-primary rounded-xl mx-6 mt-2 p-10 shadow-xl">
        <Text className="italic text-gray-700 text-5xl font-bold ">
          {user?.code}
        </Text>
        <Text className="text-gray-600">Mi codigo de acceso</Text>
      </View>

      <TouchableOpacity
        className="bg-white border border-gray-300 rounded-xl mt-2 p-4 shadow-xl flex flex-row items-center w-8/9
       justify-center gap-2 mx-auto"
        onPress={openCamera}
      >
        <Ionicons
          name="qr-code-outline"
          size={24}
          className="text-center text-gray-500"
        />
        <Text className="text-gray-500 font-bold">Marcar con QR</Text>
      </TouchableOpacity>

      <View className="mx-6 mt-10 flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-2">
          <Ionicons name="calendar" size={20} className="text-gray-600" />
          <Text className="text-xl font-bold text-gray-600">Asistencias</Text>
        </View>
        <View>
          <Pressable onPress={getAssitances}>
            <Ionicons name="reload" size={20} className="text-gray-600" />
          </Pressable>
        </View>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" className="mt-10 text-primary" />
        ) : (
          <>
            {assistances.length != 0 ? (
              <ScrollView className="h-60 mt-2">
                {assistances.map((assistance) => (
                  <View
                    key={assistance.id}
                    className="flex flex-row items-center justify-between mx-6 mt-2 bg-white rounded-xl p-4 shadow-xl"
                  >
                    <Text className="text-gray-600 font-bold">
                      {formatDate(assistance.createdAt)}
                    </Text>
                    <Text className="text-gray-600 font-bold">
                      {formatTime(assistance.createdAt)}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            ) : (
              <View className="mt-8 mx-auto">
                <Text className="text-tertiary">No hay asistencias</Text>
                <Ionicons
                  name="close-circle"
                  size={24}
                  className="text-center text-tertiary"
                />
              </View>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default index;
