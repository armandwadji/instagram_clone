import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./StoryStyle";
import ProfilePicture from "../profilePicture/ProfilePicture";
import Users from "../../data/data";

const Story = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {Users.map((user) => (
        <ProfilePicture user={user} key={user.id} />
      ))}
    </ScrollView>
  );
};

export default Story;
