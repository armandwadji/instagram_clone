import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilPicture from "../../profilPicture/ProfilPicture";
import Users from "../../../data/data";

const ProfilInfos = () => {
  return (
    <>
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
      <View style={[styles.description]}>
        <Text>SHAKI</Text>
        <Text>Application developer </Text>
        <Text style={[styles.webSite]}>armandwadji.netlify.app</Text>
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
