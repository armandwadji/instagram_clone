import { View, Image } from "react-native";
import React from "react";
import styles from "./HeaderStyle";
import { COLORS } from "../../../utils/Utils";

// Icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/Instagram-Logo.png")}
        style={styles.logo}
      />
      <View style={styles.icons}>
        <Feather name={"plus-square"} size={25} color={COLORS.white} />
        <FontAwesome5 name={"heart"} size={25} color={COLORS.white} />
        <Feather
          name={"send"}
          size={25}
          color={COLORS.white}
          style={{
            transform: [{ rotateZ: "20deg" }],
          }}
        />
      </View>
    </View>
  );
};

export default Header;
