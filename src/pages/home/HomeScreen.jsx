import React from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import Users from "../../data/data";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ position: "relative" }}>
        <StatusBar barStyle={"dark-content"} animated={true} />
        <Header />
        <FlatList
          data={Users}
          renderItem={(item) => <Posts user={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={Stories}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
