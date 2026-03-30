import Button from "@/components/Button";
import useAuth from "@/hooks/useAuth";
import useUserStore from "@/store/useUserStore";

import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { logout } = useAuth();
  const user = useUserStore((state) => state.user);

  if (!user) return null;

  return (
    <SafeAreaView className="flex-1 bg-white " style={{ marginHorizontal: 20 }}>
      {/* Header */}
      <View className="items-center mt-8 mb-8">
        <Image
          source={{
            uri: "https://i.pravatar.cc/800", // puedes cambiarlo luego por la foto real
          }}
          className="w-28 h-28 rounded-full mb-4"
        />

        <Text className="text-2xl font-bold text-gray-900">
          {user.firstName} {user.lastName}
        </Text>

        <Text className="text-gray-500 mt-1">Mi perfil</Text>
      </View>

      {/* Card info */}
      <View className="bg-gray-50 rounded-2xl p-5 mb-4 shadow-sm">
        <Text className="text-gray-400 text-sm mb-1">Correo electrónico</Text>
        <Text className="text-gray-900 text-base font-semibold">
          {user.email}
        </Text>
      </View>

      <View className="bg-gray-50 rounded-2xl p-5 mb-4 shadow-sm">
        <Text className="text-gray-400 text-sm mb-1">Teléfono</Text>
        <Text className="text-gray-900 text-base font-semibold">
          {user.phone}
        </Text>
      </View>

      <View className="bg-gray-50 rounded-2xl p-5 mb-8 shadow-sm">
        <Text className="text-gray-400 text-sm mb-1">ID Usuario</Text>
        <Text className="text-gray-900 text-base font-semibold">
          #{user.id}
        </Text>
      </View>

      {/* Logout button */}
      <Button title="Cerrar sesión" onPress={logout} />
    </SafeAreaView>
  );
};

export default Profile;
