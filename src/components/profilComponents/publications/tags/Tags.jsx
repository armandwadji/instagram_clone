import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, windowHeight, windowWidth } from "../../../../utils/Utils";

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

export default Tags;

const styles = StyleSheet.create({});
