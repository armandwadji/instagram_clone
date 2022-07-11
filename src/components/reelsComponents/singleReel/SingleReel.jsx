import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { Video } from "expo-av";
import { useIsFocused } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

import ProfilPicture from "../../profilPicture/ProfilPicture";
import styles from "../singleReel/SingleReelStyles";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("screen").height;

const SingleReel = ({ item, index, currentIndex }) => {
  const videoRef = useRef(null);

  const onBuffer = (buffer) => {
    console.log("Buffering : ", buffer);
  };
  const onError = (error) => {
    console.log("error : ", error);
  };

  //Variable permettan de vérifier que nous somme bien focus sur la fenetre reel
  const isFocused = useIsFocused();

  return (
    <View style={[styles.singleReelsContainer]}>
      <View style={styles.videoContainer}>
        <Video
          source={item.video}
          ref={videoRef}
          resizeMode='cover'
          isLooping={true}
          useNativeControls={false}
          repeat={true}
          onBuffer={onBuffer}
          onError={onError}
          volume={0}
          shouldPlay={currentIndex === index && isFocused ? true : false}
          style={styles.video}
        />
        <View style={styles.infosContainer}>
          {/* Left Component */}
          <View style={styles.left}>
            <View style={styles.headerLeft}>
              <ProfilPicture
                img={"https://picsum.photos/500/800"}
                size={30}
                footerLink={true}
              />
              <Text style={styles.titleLeft}>{item.title}</Text>
              <TouchableOpacity>
                <Text style={styles.followLeft}>S'abonner</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.descriptionLeft}>{item.description}</Text>

            <View style={styles.footerLeft}>
              <View style={styles.audioLeft}>
                <FontAwesome5 name='music' color={"white"} size={10} />
                <Text style={styles.audioDescriptionLeft}>Audio d'origine</Text>
              </View>
              <FontAwesome5 name='user-alt' color={"white"} size={10} />
            </View>
          </View>

          {/* Rigth Component */}
          <View style={styles.right}>
            <View style={styles.likesContainer}>
              <TouchableOpacity>
                <AntDesign
                  name={!item.isLike ? "hearto" : "heart"}
                  size={25}
                  color={!item.isLike ? "white" : "red"}
                />
              </TouchableOpacity>
              <Text style={styles.likesCount}>{item.likes} K</Text>
            </View>
            <View style={styles.commentsContainer}>
              <TouchableOpacity>
                <FontAwesome name={"comment-o"} size={25} color={"white"} />
              </TouchableOpacity>
              <Text style={styles.commentCount}>{item.comment}</Text>
            </View>
            <TouchableOpacity>
              <Feather
                name={"send"}
                size={25}
                color={"white"}
                style={{
                  transform: [{ rotateZ: "20deg" }],
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign
                name={"ellipsis1"}
                size={20}
                color={"white"}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </TouchableOpacity>
            <ProfilPicture
              img={"https://picsum.photos/500/800"}
              size={30}
              square={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleReel;
