import { ScrollView, Text, View } from "react-native";
import React from "react";
import { COLORS, windowWidth } from "../../../../utils/Utils";
import { videoData } from "../../../../data/VideoData";
import { Video } from "expo-av";

// Icons
import Feather from "react-native-vector-icons/Feather";

// Icon
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./VideossStyle";

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
      style={[styles.scrollContainer]}>
      <View style={[styles.series]}>
        <Text style={[styles.text]}>Séries</Text>
        <FontAwesome name={"chevron-down"} size={15} color={COLORS.white} />
      </View>
      <View style={[styles.postsContainer]}>{videos}</View>
    </ScrollView>
  );
};

export default Videoss;
