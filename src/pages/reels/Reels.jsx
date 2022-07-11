import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import styles from "./ReelsStyle";
import Header from "../../components/reelsComponents/header/Header";
import Videos from "../../components/reelsComponents/videos/Videos";

const Reels = () => {
  return (
    <>
      <StatusBar
        backgroundColor='black'
        barStyle={"light-content"}
        animated={true}
      />
      <View style={styles.container}>
        <Header />
        <Videos />
      </View>
    </>
  );
};

export default Reels;
