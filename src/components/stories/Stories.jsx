import { ScrollView } from "react-native";
import React from "react";
import styles from "./StoriesStyle";
import Story from "../story/Story";
import Users from "../../data/data";

const Stories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {Users.map((user) => (
        <Story user={user} key={user.id} />
      ))}
    </ScrollView>
  );
};

export default Stories;
