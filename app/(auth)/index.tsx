import Button from "@/components/Button";
import Input from "@/components/Input";
import KeyboardView from "@/components/KeyboardView";
import useAuth from "@/hooks/useAuth";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Toast from "react-native-toast-message";

const index = () => {
  const { email, code, setEmail, setCode, login } = useAuth();

  return (
    <KeyboardView>
      <ImageBackground
        source={require("@/assets/bgLogin.png")}
        resizeMode="repeat"
        className="flex-1"
      >
        <View className="items-center mt-20">
          <View className="bg-white/10 p-4 rounded-full backdrop-blur-lg">
            <Image
              source={require("@/assets/logo.jpg")}
              className="w-28 h-28 rounded-full"
              resizeMode="cover"
            />
          </View>
        </View>
        {/* Blur oscuro elegante */}
        <View className="flex-1 bg-white rounded-t-2xl mt-35 px-6 pt-10 justify-between">
          {/* Logo + título */}

          {/* Card Glassmorphism */}
          <View>
            <View className="">
              <View>
                <Text className="text-gray-500 text-3xl font-bold  text-center">
                  Bienvenido!!!
                </Text>
                <Text className="text-gray-300 text-sm mb-4 text-center">
                  Inicia sesión para continuar
                </Text>
              </View>

              <Input
                placeholder="example@gmail.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                label="Email"
              />

              <Input
                placeholder="000000"
                value={code}
                keyboardType="number-pad"
                onChangeText={setCode}
                label="Código de acceso"
              />

              {/* Botón premium */}
            </View>
            <View>
              <View className="mt-6">
                <Button
                  title="Entrar al sistema"
                  className="bg-primary py-4 rounded-2xl shadow-lg"
                  onPress={login}
                />
              </View>
              {/* Footer elegante */}
              <Text className="text-gray-400 text-center text-xs mb-6 mt-6">
                © 2026 Gym Control — ReWare Studios
              </Text>
            </View>
          </View>
        </View>
        <Toast />
      </ImageBackground>
    </KeyboardView>
  );
};

export default index;
