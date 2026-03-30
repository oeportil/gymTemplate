import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

const KeyboardView = ({ children }: { children: React.ReactNode }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardView;
