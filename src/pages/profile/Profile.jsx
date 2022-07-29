import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./ProfileStyle";
import HeaderProfil from "../../components/profilComponents/header/HeaderProfil";
import ProfilPicture from "../../components/profilPicture/ProfilPicture";
import Users from "../../data/data";
import ProfilInfos from "../../components/profilComponents/profilInfo/ProfilInfos";

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        {/* Headerprofil */}
        <HeaderProfil />

        {/* ProfilInfo */}
        <ProfilInfos />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
