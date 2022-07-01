import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./ProfilePictureStyle";

const ProfilePicture = ({ user }) => {
  return (
    <View style={styles.story}>
      <View
        style={!user.admin ? styles.img_container : styles.img_container_admin}>
        <Image
          source={{
            uri: `${user.img}`,
          }}
          style={styles.img}
        />
      </View>
      <Text style={styles.name}>{user.admin ? "Votre story" : user.name}</Text>
    </View>
  );
};

export default ProfilePicture;
