import { loginApi } from "@/services/auth.service";
import { useState } from "react";
import Toast from "react-native-toast-message";

const useAuth = () => {
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const login = async () => {
    // if (!email || !code) {
    //   Toast.show({
    //     type: "error",
    //     text1: "Error",
    //     text2: "Todos los campos son obligatorios",
    //     swipeable: true,
    //   });
    //   return;
    // }
    const response = await loginApi({ email, code });
    console.log(response);
    if (response) {
      Toast.show({
        type: "success",
        text1: "Login exitoso",
        text2: "Bienvenido",
        swipeable: true,
      });
    }
  };

  const logout = () => {};

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
