import { View, TextInput } from "react-native";
import React from "react";
import styles from "./SearchBoxStyle";
import Feather from "react-native-vector-icons/Feather";
import { COLORS } from "../../../utils/Utils";

const SearchBox = () => {
  return (
    <View>
      <View style={styles.header}>
        <TextInput
          placeholder='Rechercher'
          style={styles.textInput}
          placeholderTextColor={COLORS.background}
        />
        <Feather
          name={"search"}
          size={20}
          style={styles.icon}
          color={COLORS.white}
        />
      </View>
    </View>
  );
};

export default SearchBox;
