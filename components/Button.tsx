import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Prop = {
  title: string;
  onPress?: () => void;
  className?: string;
};

const Button = ({ title, onPress, className }: Prop) => {
  return (
    <TouchableOpacity
      className={`bg-primary rounded-xl py-4 ${className}`}
      onPress={onPress}
    >
      <Text className="text-white text-center font-bold"> {title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
