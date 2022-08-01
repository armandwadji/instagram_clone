import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../utils/Utils";
import styles from "./HeaderProfilStyle";

const HeaderProfil = () => {
  return (
    <View style={[styles.headerContainer]}>
      <TouchableOpacity style={[styles.nameContainer]}>
        <Text style={[styles.name]}>Shaki_retouch</Text>
        <Feather name={"chevron-down"} size={15} color={COLORS.white} />
      </TouchableOpacity>
      <View style={[styles.icons]}>
        <TouchableOpacity>
          <Feather name={"plus-square"} size={30} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name={"menu-outline"} size={35} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderProfil;
