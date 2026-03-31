import { useEffect, useState } from "react";

import type { Tpagination } from "@/types/index";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, View } from "react-native";

const SearchInput = ({
  handlePagination,
  pag,
}: {
  handlePagination: (values: Tpagination) => void;
  pag: Tpagination;
}) => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    handlePagination({ ...pag, search: value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <View className="flex flex-row items-center gap-2 bg-white rounded-xl p-1 shadow">
      <Ionicons name="search" size={20} className="text-gray-400" />
      <TextInput
        keyboardType="web-search"
        value={value}
        onChangeText={setValue}
        placeholder="Search..."
        className="focus:outline-none"
      />
    </View>
  );
};

export default SearchInput;
