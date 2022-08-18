import { View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import styles from "./ProfileStyle";
import HeaderProfil from "../../components/profilComponents/header/HeaderProfil";
import ProfilInfos from "../../components/profilComponents/profilInfo/ProfilInfos";
import HighlightsStories from "../../components/profilComponents/highlightsStories/HighlightsStories";
import Publications from "../../components/profilComponents/publications/Publications";
import { COLORS } from "../../utils/Utils";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const Profile = () => {
  const translateY = useSharedValue(0);

  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      console.log(translateY.value);
    });

  const rBottom = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black }}>
      {/* StatusBar */}
      <StatusBar barStyle={"light-content"} />

      {/* Headerprofil */}
      <HeaderProfil />

      <GestureDetector gesture={gesture}>
        {/* ProfilContainer */}
        <Animated.View style={[styles.container, rBottom]}>
          {/* ProfilInfo */}
          <ProfilInfos />

          {/* HighlightsStories */}
          <HighlightsStories />

          {/* Publication */}
          <Publications />
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default Profile;
