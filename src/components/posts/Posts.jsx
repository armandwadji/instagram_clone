import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./PostsStyle";
import ProfilPicture from "../profilPicture/ProfilPicture";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Users from "../../data/data";

const Posts = () => {
  return (
    <>
      {Users.map(({ name, id, likes, img, desc }) => {
        return (
          <View style={styles.container} key={id}>
            <View style={styles.header}>
              <View style={styles.profil}>
                <Image source={{ uri: img }} style={styles.img} />
                <Text style={styles.name}>{name}</Text>
              </View>
              <FontAwesome5 name={"ellipsis-h"} size={15} />
            </View>
            <View style={styles.body}>
              <Image source={{ uri: img }} style={styles.img_body} />
              <View style={styles.icons}>
                <View style={styles.left}>
                  <Feather name={"heart"} size={20} />
                  <FontAwesome name={"comment-o"} size={20} />
                  <Feather name={"send"} size={20} />
                </View>
                <Feather name={"bookmark"} size={20} />
              </View>
            </View>
            <View style={styles.footer}>
              <Text>{likes} j'aime</Text>
              <Text>
                {name} - {desc}
              </Text>
              <Text>il y'a {"times"} heure</Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default Posts;
