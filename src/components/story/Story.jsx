import { Text, View } from "react-native";
import React from "react";
import styles from "./StoryStyle";
import Feather from "react-native-vector-icons/Feather";
import ProfilPicture from "../profilPicture/ProfilPicture";

const Story = ({ user, size = 60, footer, post }) => {
  return (
    <View style={[styles.story, post && { flexDirection: "row" }]}>
      <View
        style={[
          styles.img_container,
          user.admin && {
            borderColor: "grey",
            borderWidth: 1.5,
            position: "relative",
          },
          footer && { borderColor: "white" },
          { height: size + 5, width: size + 5 },
        ]}>
        <ProfilPicture img={user.img} size={size} footer={footer} />
        {user.admin && !post && (
          <View style={styles.icon}>
            <Feather name={"plus-circle"} size={15} color={"white"} />
          </View>
        )}
      </View>
      {!footer && (
        <>
          <Text style={styles.name}>
            {user.admin && !post ? "Votre story" : user.name}
          </Text>
        </>
      )}
    </View>
  );
};

export default Story;
