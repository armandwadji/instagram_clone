import { Image, ScrollView, View } from "react-native";
import React from "react";
import { COLORS, windowWidth } from "../../../../utils/Utils";
import styles from "./TagsStyle";

const Tags = () => {
  let squares = [];
  let numberSquares = 7;

  for (let index = 0; index < numberSquares; index++) {
    squares.push(
      <View key={index}>
        <Image
          source={{ uri: "https://picsum.photos/500/800" }}
          resizeMode={"contain"}
          style={[
            styles.img,
            {
              width: windowWidth / 3,
              height: 205,
              marginVertical: 1.5,
            },
          ]}
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

export default Tags;
