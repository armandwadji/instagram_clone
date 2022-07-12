import { View, StatusBar } from "react-native";
import React from "react";
import styles from "./ReelsStyle";
import Header from "../../components/reelsComponents/header/Header";
import Videos from "../../components/reelsComponents/videos/Videos";
import { useIsFocused } from "@react-navigation/native";

const Reels = () => {
  //Variable permettan de vérifier que nous somme bien focus sur la fenetre reel
  const isFocused = useIsFocused();
  return (
    <>
      {isFocused && (
        <StatusBar
          backgroundColor='black'
          barStyle={"light-content"}
          animated={true}
        />
      )}

      <View style={styles.container}>
        <Header />
        <Videos />
      </View>
    </>
  );
};

export default Reels;
