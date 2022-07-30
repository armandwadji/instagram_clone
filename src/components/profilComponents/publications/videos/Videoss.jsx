import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, windowHeight, windowWidth } from "../../../../utils/Utils";
import { videoData } from "../../../../data/VideoData";
import { Video } from "expo-av";

// Icons
import Feather from "react-native-vector-icons/Feather";

// Icon
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Videoss = () => {
  let videos = [];

  for (let index = 0; index < videoData.length; index++) {
    videos.push(
      <View key={index} style={{ position: "relative" }}>
        <Video
          source={videoData.at(index).video}
          resizeMode='cover'
          useNativeControls={false}
          style={{
            width: windowWidth / 3.05,
            height: 200,
            marginVertical: 0.5,
          }}
        />
        <View
          style={[
            styles.play,
            {
              position: "absolute",
              bottom: 15,
              left: 5,
              flexDirection: "row",
            },
          ]}>
          <Feather name='play' size={18} color={COLORS.white} />
          <Text
            style={[
              styles.likes,
              {
                color: COLORS.white,
                marginLeft: 5,
              },
            ]}>
            {parseInt(videoData.at(index).likes)}
          </Text>
        </View>
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
          styles.series,
          {
            backgroundColor: COLORS.black,
            color: COLORS.white,
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: COLORS.white,
              marginRight: 5,
              fontSize: 16,
              fontWeight: "700",
            },
          ]}>
          Séries
        </Text>
        <FontAwesome name={"chevron-down"} size={15} color={COLORS.white} />
      </View>
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
        {videos}
      </View>
    </ScrollView>
  );
};

export default Videoss;

const styles = StyleSheet.create({});
