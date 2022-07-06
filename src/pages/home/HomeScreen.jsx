import React from "react";
import { FlatList, StatusBar, View } from "react-native";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import Users from "../../data/data";

const HomeScreen = () => {
  return (
    <View style={{ position: "relative" }}>
      <StatusBar barStyle={"dark-content"} />
      <Header />
      <FlatList
        data={Users}
        renderItem={(item) => <Posts user={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Stories}
      />
      <Footer />
    </View>
  );
};

export default HomeScreen;
