import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./ProfilePictureStyle";

const ProfilePicture = () => {
  return (
    <Image
      source={require("../../assets/img/Instagram_logo.svg.png")}
      style={styles.img}
    />
  );
};

export default ProfilePicture;
