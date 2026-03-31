import SearchInput from "@/components/SeaarchInput";
import useProducts from "@/hooks/useProducts";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const products = () => {
  const { getProducts, handlePagination, pag, products } = useProducts();

  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center mx-6 mt-7 mb-3">
        <View className="flex flex-row items-center gap-2">
          <Ionicons name="bag" size={20} className="text-gray-600" />
          <Text className="text-xl font-bold text-gray-600">Productos</Text>
        </View>
        <Pressable onPress={getProducts}>
          <Ionicons name="reload" size={20} className="text-gray-600" />
        </Pressable>
      </View>

      <View className="mx-2 my-5 ">
        <SearchInput handlePagination={handlePagination} pag={pag} />
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-1 bg-white mx-2 rounded-xl">
            <Image
              source={{ uri: item.image }}
              className="w-full h-40 rounded-t-xl"
            />
            <View className="p-2 mt-2">
              <Text className="font-bold text-lg">${item.price}</Text>
              <Text className="font-semibold text-sm">{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default products;
