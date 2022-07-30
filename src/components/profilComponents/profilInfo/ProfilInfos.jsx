import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProfilPicture from "../../profilPicture/ProfilPicture";
import Users from "../../../data/data";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProfilInfos = () => {
  return (
    <>
      {/* Infos profils */}
      <View style={[styles.profilInfoContainer]}>
        <View style={[styles.profilPicture]}>
          <ProfilPicture img={Users.at(0).img} size={100} />
        </View>
        <View style={[styles.followsInfosContainer]}>
          <View style={[styles.followsInfos]}>
            <Text style={[styles.followsNumber]}>14</Text>
            <Text style={[styles.followsTitle]}>publications</Text>
          </View>
          <View style={[styles.followsInfos]}>
            <Text style={[styles.followsNumber]}>359</Text>
            <Text style={[styles.followsTitle]}>Abonnés</Text>
          </View>
          <View style={[styles.followsInfos]}>
            <Text style={[styles.followsNumber]}>123</Text>
            <Text style={[styles.followsTitle]}>Abonnements</Text>
          </View>
        </View>
      </View>
      {/* Description profil */}
      <View style={[styles.description]}>
        <Text>SHAKI</Text>
        <Text>Application developer </Text>
        <Text style={[styles.webSite]}>armandwadji.netlify.app</Text>
      </View>
      {/* Edit profil */}
      <View
        style={[
          styles.editProfilContainer,
          {
            // backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            marginVertical: 5,
          },
        ]}>
        <TouchableOpacity
          style={[
            styles.editProfil,
            {
              flex: 3.5,
              borderWidth: 1,
              // borderColor: "#DEDEDE",
              borderRadius: 5,
            },
          ]}>
          <Text
            style={[
              styles.editProfilText,
              {
                textAlign: "center",
                padding: 2,
                letterSpacing: 1,
                opacity: 0.8,
              },
            ]}>
            Modifier le profil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.editProfilIcon,
            {
              flex: 0.2,
              borderWidth: 1,
              // borderColor: "#DEDEDE",
              display: "flex",
              alignItems: "center",
              marginLeft: 5,
              padding: 2,
              borderRadius: 5,
              opacity: 0.8,
            },
          ]}>
          <AntDesign name='adduser' size={15} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfilInfos;

const styles = StyleSheet.create({
  profilInfoContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 5,
    // alignItems: "center",
  },
  profilPicture: {
    // backgroundColor: "green",
    flex: 1,
  },
  followsInfosContainer: {
    // backgroundColor: "yellow",
    flex: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  followsInfos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  followsNumber: {
    fontSize: 15,
    fontWeight: "600",
  },
  followsTitle: {
    fontSize: 13,
    textTransform: "capitalize",
  },
  description: {
    // backgroundColor: "green",
    // width: "70%",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  webSite: {
    color: "blue",
  },
});
