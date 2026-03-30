import Button from "@/components/Button";
import useAuth from "@/hooks/useAuth";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  const { logout } = useAuth();

  return (
    <SafeAreaView>
      <Text>profile</Text>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

export default profile;
