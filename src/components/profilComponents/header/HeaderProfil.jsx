import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../utils/Utils";
import styles from "./HeaderProfilStyle";

const HeaderProfil = () => {
  return (
    <View style={[styles.headerContainer]}>
      <TouchableOpacity
        style={[
          styles.nameContainer,
          {
            // backgroundColor: "green",
            flex: 2.25,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
        ]}>
        <Text
          style={[
            styles.name,
            {
              fontSize: 20,
              fontWeight: "bold",
              color: COLORS.white,
            },
          ]}>
          Shaki_retouch
        </Text>
        <Feather name={"chevron-down"} size={15} color={COLORS.white} />
      </TouchableOpacity>
      <View
        style={[
          styles.icons,
          {
            // backgroundColor: "yellow",
            flex: 0.75,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          },
        ]}>
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
