import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "./PostsStyle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Story from "../story/Story";
import Users from "../../data/data";

const Posts = ({ user }) => {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
    incrementLike();
  };

  const incrementLike = () => {
    if (!isLike) {
      Users.map((item) => {
        item.id === user.item.id && item.likes++;
      });
    } else {
      Users.map((item) => {
        item.id === user.item.id && item.likes--;
      });
    }
  };

  return (
    <>
      <View style={styles.container} key={user.item.id}>
        <View style={styles.header}>
          <Story user={user.item} size={30} post={true} />
          <FontAwesome5 name={"ellipsis-h"} size={15} />
        </View>
        <View style={styles.body}>
          <Image source={{ uri: user.item.img }} style={styles.img_body} />
          <View style={styles.icons}>
            <View style={styles.left}>
              {isLike ? (
                <AntDesign
                  name={"heart"}
                  size={25}
                  color={"red"}
                  onPress={handleLike}
                />
              ) : (
                <AntDesign name={"hearto"} size={25} onPress={handleLike} />
              )}

              <FontAwesome name={"comment-o"} size={25} />
              <Feather
                name={"send"}
                size={25}
                style={{
                  transform: [{ rotateZ: "20deg" }],
                }}
              />
            </View>
            <Feather name={"bookmark"} size={25} />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.likes}>
            {user.item.likes} j'aime{user.item.likes > 1 && "s"}
          </Text>
          <Text style={styles.desc}>
            {user.item.name} - {user.item.desc}
          </Text>
          <Text style={styles.postAt}>il y'a {"times"} heure</Text>
        </View>
      </View>
    </>
  );
};

export default Posts;
