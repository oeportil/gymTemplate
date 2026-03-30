import React from "react";
import { Text, TextInput, View } from "react-native";

type Prop = {
  placeholder: string;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url"
    | "visible-password";
};

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  label,
}: Prop) => {
  return (
    <View className="my-3">
      <Text className="text-tertiary text-start text-sm font-bold">
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        className="bg-white rounded-2xl shadow border border-gray-100 placeholder:text-gray-300 "
        style={{ paddingHorizontal: 10, height: 45 }}
      />
    </View>
  );
};

export default Input;
