import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, windowHeight, windowWidth } from "../../../../utils/Utils";

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
      style={[
        styles.scrollContainer,
        {
          width: windowWidth,
          height: windowHeight,
        },
      ]}>
      <View
        style={[
          styles.postsContainer,
          {
            width: windowWidth,
            height: windowHeight,
            backgroundColor: COLORS.black,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}>
        {squares}
      </View>
    </ScrollView>
  );
};

export default Posts;

const styles = StyleSheet.create({});
