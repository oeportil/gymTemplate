import useStoreAuth from "@/store/useStoreAuth";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = useTheme();
  const hasHydrated = useStoreAuth.persist.hasHydrated();
  const { token } = useStoreAuth();

  useEffect(() => {
    if (hasHydrated) {
      SplashScreen.hide();
    }
  }, [hasHydrated]);

  if (!hasHydrated) {
    return null;
  }

  return (
    <>
      <StatusBar style={theme.dark ? "light" : "dark"} />
      <Toast />
      <Stack screenOptions={{ headerShown: false }}>
        {token ? (
          <Stack.Screen name="(tabs)" />
        ) : (
          <Stack.Screen name="(auth)" />
        )}
      </Stack>
    </>
  );
}
