import { View, Text } from "react-native";
import React from "react";
import styles from "./FooterSyle";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import ProfilPicture from "../profilPicture/ProfilPicture";
import Story from "../story/Story";
import Users from "../../data/data";

const Footer = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Footer</Text> */}
      <Entypo name={"home"} size={25} />
      <AntDesign name={"search1"} size={25} />
      <Octicons name={"video"} size={25} />
      <Feather name={"shopping-bag"} size={25} />
      <Story user={Users[1]} size={30} footer={true} />
    </View>
  );
};

export default Footer;
