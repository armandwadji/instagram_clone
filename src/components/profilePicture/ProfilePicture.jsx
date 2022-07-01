import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./ProfilePictureStyle";
import Feather from "react-native-vector-icons/Feather";

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
        {user.admin && (
          <View style={styles.icon}>
            <Feather name={"plus-circle"} size={15} color={"white"} />
          </View>
        )}
      </View>
      <Text style={styles.name}>{user.admin ? "Votre story" : user.name}</Text>
    </View>
  );
};

export default ProfilePicture;
