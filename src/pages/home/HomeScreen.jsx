import React from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import Header from "../../components/homeComponents/header/Header";
import Posts from "../../components/homeComponents/posts/Posts";
import Stories from "../../components/homeComponents/stories/Stories";
import Users from "../../data/data";
import { COLORS } from "../../utils/Utils";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.black,
      }}>
      <View style={{ position: "relative" }}>
        <StatusBar barStyle={"light-content"} animated={true} />
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
