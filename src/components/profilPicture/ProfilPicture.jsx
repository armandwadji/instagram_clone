import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./ProfilPictureStyle";

const ProfilPicture = ({ img }) => {
  return (
    <Image
      source={{
        uri: img,
      }}
      style={styles.img}
    />
  );
};

export default ProfilPicture;
