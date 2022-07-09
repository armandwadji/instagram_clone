import { View, Image } from "react-native";
import React from "react";
import styles from "./HeaderStyle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/Instagram_logo.svg.png")}
        style={styles.logo}
      />
      <View style={styles.icons}>
        <Feather name={"plus-square"} size={25} />
        <FontAwesome5 name={"heart"} size={25} />
        <Feather
          name={"send"}
          size={25}
          style={{
            transform: [{ rotateZ: "20deg" }],
          }}
        />
      </View>
    </View>
  );
};

export default Header;
