import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";

const HomeScreen = () => {
  return (
    <View style={{ position: "relative" }}>
      <StatusBar barStyle={"dark-content"} />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <Posts />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default HomeScreen;
