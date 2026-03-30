import usePyS from "@/hooks/usePyS";
import { formatDate, formatTime } from "@/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const payments = () => {
  const { payments, isLoading, getPayments, subscription } = usePyS();
  return (
    <SafeAreaView style={{ marginHorizontal: 0 }}>
      <View className="flex-row justify-between items-center mx-6 mt-7 mb-3">
        <View className="flex flex-row items-center gap-2">
          <Ionicons name="card" size={20} className="text-gray-600" />
          <Text className="text-xl font-bold text-gray-600">
            Pagos y Suscripción
          </Text>
        </View>
        <Pressable onPress={getPayments}>
          <Ionicons name="reload" size={20} className="text-gray-600" />
        </Pressable>
      </View>

      <View className="bg-primary rounded-xl mx-6 mt-2 p-5 shadow-xl">
        <Text className="text-gray-600">{subscription?.name || "..."}</Text>
        <Text className="text-gray-600 font-bold text-2xl">
          ${subscription?.cost || "..."}
        </Text>

        <View className="flex flex-row justify-between">
          <Text className="text-gray-600 font-bold">
            Afiliado:{" "}
            {subscription ? formatDate(subscription?.createdAt) : "..."}
          </Text>
          <Text className="text-gray-600 font-bold">
            Duración: {subscription?.daysQuantity || "..."} días
          </Text>
        </View>
      </View>

      <View className="mx-6 mt-10 flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-2">
          <Ionicons name="cash" size={15} className="text-gray-600" />
          <Text className="text-lg font-bold text-gray-600">
            Historial de pagos
          </Text>
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" className="mt-10 text-primary" />
      ) : (
        <ScrollView className="h-60 mt-2">
          {payments.map((payment) => (
            <View
              key={payment.id}
              className=" mx-6 mt-2 bg-white rounded-xl p-4 shadow-xl"
            >
              <Text className="text-gray-600 font-bold text-2xl">
                ${payment.amount}
              </Text>
              <View className="flex flex-row justify-between">
                <Text className="text-gray-600 font-bold">
                  {formatDate(payment.paymentDate)}
                </Text>
                <Text className="text-gray-600 font-bold">
                  {formatTime(payment.paymentDate)}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default payments;
