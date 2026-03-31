import { loginApi } from "@/services/auth.service";
import useStoreAuth from "@/store/useStoreAuth";
import useUserStore from "@/store/useUserStore";
import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

const useAuth = () => {
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const { setToken, clearToken } = useStoreAuth();
  const { setUser, clearUser } = useUserStore();
  const login = async () => {
    if (!email || !code) {
      Toast.show({
        type: "info",
        text1: "Información",
        text2: "Todos los campos son obligatorios",
        swipeable: true,
      });
      return;
    }
    const response = await loginApi({ email, code });
    if (response && response.status) {
      //aqui debemos guardar el token
      setToken(response.data.token);
      setUser(response.data.customer);
      router.replace("/(tabs)");
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: response.msg,
        swipeable: true,
      });
    }
  };

  const logout = () => {
    clearToken();
    clearUser();
    router.replace("/(auth)");
  };

  return {
    login,
    logout,
    email,
    code,
    setEmail,
    setCode,
  };
};

export default useAuth;
