import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./StoryStyle";
import Feather from "react-native-vector-icons/Feather";
import ProfilPicture from "../profilPicture/ProfilPicture";

const Story = ({ user, size = 60, footer }) => {
  return (
    <View style={styles.story}>
      <View
        style={[
          !user.admin ? styles.img_container : styles.img_container_admin,
          { height: size + 5, width: size + 5 },
          footer && { borderColor: "white" },
        ]}>
        <ProfilPicture img={user.img} size={size} footer={footer} />
        {user.admin && (
          <View style={styles.icon}>
            <Feather name={"plus-circle"} size={15} color={"white"} />
          </View>
        )}
      </View>
      {!footer && (
        <>
          <Text style={styles.name}>
            {user.admin ? "Votre story" : user.name}
          </Text>
        </>
      )}
    </View>
  );
};

export default Story;
