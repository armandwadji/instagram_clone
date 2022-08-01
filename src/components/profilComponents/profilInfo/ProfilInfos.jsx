import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProfilPicture from "../../profilPicture/ProfilPicture";
import Users from "../../../data/data";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../../utils/Utils";
import styles from "./ProfilInfoStyle";

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
        <Text style={[styles.descInf]}>SHAKI</Text>
        <Text style={[styles.descInf]}>Application developer </Text>
        <Text style={[styles.webSite]}>armandwadji.netlify.app</Text>
      </View>
      {/* Edit profil */}
      <View style={[styles.editProfilContainer]}>
        <TouchableOpacity style={[styles.editProfil]}>
          <Text style={[styles.editProfilText, { color: "white" }]}>
            Modifier le profil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.editProfilIcon]}>
          <AntDesign name='adduser' size={15} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfilInfos;
