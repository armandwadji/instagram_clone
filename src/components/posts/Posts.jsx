import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./PostsStyle";
import ProfilPicture from "../profilPicture/ProfilPicture";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Posts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profil}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.img}
          />
          <Text style={styles.name}>name</Text>
        </View>
        <FontAwesome5 name={"ellipsis-h"} size={15} />
      </View>
    </View>
  );
};

export default Posts;
