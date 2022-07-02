import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./PostsStyle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Users from "../../data/data";
import Story from "../story/Story";

const Posts = () => {
  return (
    <>
      {Users.map((user) => {
        return (
          <View style={styles.container} key={user.id}>
            <View style={styles.header}>
              <Story user={user} size={30} post={true} />
              <FontAwesome5 name={"ellipsis-h"} size={15} />
            </View>
            <View style={styles.body}>
              <Image source={{ uri: user.img }} style={styles.img_body} />
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
              <Text>{user.likes} j'aime</Text>
              <Text>
                {user.name} - {user.desc}
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
