import { View, Text, StatusBar } from "react-native";
import React from "react";
import styles from "./HeaderStyle";
import Feather from "react-native-vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>Reels</Text>
      <Feather name={"camera"} size={35} color={"white"} />
    </View>
  );
};

export default Header;
