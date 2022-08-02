import { Image, ScrollView, View } from "react-native";
import React from "react";
import { windowWidth } from "../../../../utils/Utils";
import styles from "./PostsStyle";

const Posts = () => {
  let squares = [];
  let numberSquares = 10;

  for (let index = 0; index < numberSquares; index++) {
    squares.push(
      <View key={index}>
        <Image
          source={{ uri: "https://picsum.photos/500/800" }}
          resizeMode={"cover"}
          style={{
            width: windowWidth / 3.015,
            height: 150,
            marginVertical: 0.5,
          }}
        />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.scrollContainer]}>
      <View style={[styles.postsContainer]}>{squares}</View>
    </ScrollView>
  );
};

export default Posts;
