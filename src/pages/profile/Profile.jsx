import { View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import styles from "./ProfileStyle";
import HeaderProfil from "../../components/profilComponents/header/HeaderProfil";
import ProfilInfos from "../../components/profilComponents/profilInfo/ProfilInfos";
import HighlightsStories from "../../components/profilComponents/highlightsStories/HighlightsStories";
import Publications from "../../components/profilComponents/publications/Publications";
import { COLORS } from "../../utils/Utils";

const Profile = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black }}>
      {/* StatusBar */}
      <StatusBar barStyle={"light-content"} />

      {/* ProfilContainer */}
      <View style={[styles.container]}>
        {/* Headerprofil */}
        <HeaderProfil />

        {/* ProfilInfo */}
        <ProfilInfos />

        {/* HighlightsStories */}
        <HighlightsStories />

        {/* Publication */}
        <Publications />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
