import React from "react";
import { View } from "react-native";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Stories />
      <Posts />
      {/* <Footer /> */}
    </View>
  );
};

export default HomeScreen;
