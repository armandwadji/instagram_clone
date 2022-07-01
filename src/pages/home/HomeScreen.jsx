import React from "react";
import { View } from "react-native";
import Header from "../../components/header/Header";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import Story from "../../components/storys/Story";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Story />
    </View>
  );
};

export default HomeScreen;
