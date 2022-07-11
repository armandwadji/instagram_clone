import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./ReelsStyle";
import Header from "../../components/reelsComponents/header/Header";
import Videos from "../../components/reelsComponents/videos/Videos";

const Reels = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Videos />
      </View>
    </SafeAreaView>
  );
};

export default Reels;
