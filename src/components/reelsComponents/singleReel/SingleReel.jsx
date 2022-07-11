import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useRef } from "react";
import { Video } from "expo-av";

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const videoRef = useRef(null);

  const onBuffer = (buffer) => {
    console.log("Buffering : ", buffer);
  };
  const onError = (error) => {
    console.log("error : ", error);
  };
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: "relative",
      }}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}>
        <Video
          source={item.video}
          ref={videoRef}
          resizeMode='cover'
          isLooping={true}
          useNativeControls={false}
          // paused={currentIndex == index ? false : true}
          repeat={true}
          onBuffer={onBuffer}
          onError={onError}
          onLoadStart
          shouldPlay={currentIndex == index ? true : false}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SingleReel;
