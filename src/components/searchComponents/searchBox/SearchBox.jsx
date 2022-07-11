import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./SearchBoxStyle";
import Feather from "react-native-vector-icons/Feather";

const SearchBox = () => {
  return (
    <View>
      <View style={styles.header}>
        <TextInput placeholder='Rechercher' style={styles.textInput} />
        <Feather name={"search"} size={20} style={styles.icon} />
      </View>
    </View>
  );
};

export default SearchBox;
