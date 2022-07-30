import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, windowHeight, windowWidth } from "../../../../utils/Utils";

const Tags = () => {
  return (
    <View
      style={[
        styles.videosContainer,
        {
          width: windowWidth,
          height: windowHeight,
          backgroundColor: COLORS.black,
          flexWrap: "wrap",
          flexDirection: "row",
          // paddingVertical: 5,
          justifyContent: "space-between",
        },
      ]}>
      <Text>Tags</Text>
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({});
