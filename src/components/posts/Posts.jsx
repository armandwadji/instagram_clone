import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./PostsStyle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Story from "../story/Story";
import Users from "../../data/data";
import { truncateText } from "../../utils/Utils";

const Posts = ({ user }) => {
  const [isLike, setIsLike] = useState(false);
  const [descLength, setDesclength] = useState(true);

  //Méthode pour le state like
  const handleLike = () => {
    setIsLike(!isLike);
    incrementLike();
  };

  //Méthode pour l'incrementation et la décrémentation des likes
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

  //Méthode pour le paragraphe de description
  const showDescription = () => {
    setDesclength(!descLength);
  };

  return (
    <>
      <View style={styles.container} key={user.item.id}>
        <View style={styles.header}>
          <Story user={user.item} size={30} post={true} />

          <TouchableOpacity>
            <FontAwesome5 name={"ellipsis-h"} size={15} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Image source={{ uri: user.item.img }} style={styles.img_body} />
          <View style={styles.icons}>
            <View style={styles.left}>
              <TouchableOpacity onPress={handleLike}>
                <AntDesign
                  name={isLike ? "heart" : "hearto"}
                  size={25}
                  color={isLike ? "red" : "black"}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesome name={"comment-o"} size={25} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Feather
                  name={"send"}
                  size={25}
                  style={{
                    transform: [{ rotateZ: "20deg" }],
                  }}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Feather name={"bookmark"} size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.likes}>
            {user.item.likes} j'aime{user.item.likes > 1 && "s"}
          </Text>
          <Text style={styles.desc}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {user.item.name}
            </Text>{" "}
            {descLength ? truncateText(user.item.desc, 110) : user.item.desc}{" "}
            {user.item.desc.length > 100 && descLength && (
              <Text style={styles.plus} onPress={showDescription}>
                plus
              </Text>
            )}
          </Text>
          <Text style={styles.postAt}>il y'a {"6"} minutes</Text>
        </View>
      </View>
    </>
  );
};

export default Posts;
