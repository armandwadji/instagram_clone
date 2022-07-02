import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./ProfilPictureStyle";

const ProfilPicture = ({ img, size = 60, footer }) => {
  return (
    <Image
      source={{
        uri: img,
      }}
      style={[
        styles.img,
        { width: size, height: size },
        footer && { borderColor: "black" },
      ]}
    />
  );
};

export default ProfilPicture;