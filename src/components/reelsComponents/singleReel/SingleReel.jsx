import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useRef } from "react";
import { Video } from "expo-av";
import { useIsFocused } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

import ProfilPicture from "../../profilPicture/ProfilPicture";
import styles from "../header/HeaderStyle";

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("screen").height;

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
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: "relative",
      }}>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}>
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
          style={{
            width: windowWidth,
            height: windowHeight,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <View
          style={{
            // backgroundColor: "red",
            position: "absolute",
            zIndex: 10,
            bottom: 80,
            height: "30%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}>
          <View
            style={[
              styles.left,
              {
                // backgroundColor: "green",
                height: "100%",
                width: "70%",
                justifyContent: "flex-end",
                marginBottom: 10,
              },
            ]}>
            <View
              style={[
                styles.header,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                },
              ]}>
              <ProfilPicture
                img={"https://picsum.photos/500/800"}
                size={30}
                footerLink={true}
              />
              <Text
                style={[
                  styles.title,
                  {
                    paddingHorizontal: 10,
                    color: "white",
                    fontSize: 10,
                    fontWeight: "bold",
                  },
                ]}>
                {item.title}
              </Text>
              <Text
                style={[
                  styles.follow,
                  {
                    color: "white",
                    fontSize: 10,
                    fontWeight: "bold",
                    padding: 2,
                    borderWidth: 0.5,
                    borderColor: "white",
                    borderRadius: 5,
                  },
                ]}>
                S'abonner
              </Text>
            </View>

            <Text
              style={[
                styles.description,
                {
                  color: "white",
                  paddingBottom: 10,
                  fontSize: 12,
                },
              ]}>
              {item.description}
            </Text>

            <View
              style={[
                styles.footer,
                {
                  display: "flex",
                  flexDirection: "row",
                },
              ]}>
              <View
                style={[
                  styles.audio,
                  {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingRight: 15,
                  },
                ]}>
                <FontAwesome5 name='music' color={"white"} size={10} />
                <Text
                  style={[
                    styles.audioDescription,
                    {
                      paddingLeft: 10,
                      color: "white",
                      textTransform: "capitalize",
                      fontSize: 10,
                    },
                  ]}>
                  Audio d'origine
                </Text>
              </View>
              <FontAwesome5 name='user-alt' color={"white"} size={10} />
            </View>
          </View>
          <View
            style={[
              styles.rigth,
              {
                // backgroundColor: "green",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingVertical: 5,
              }}>
              <AntDesign name={"hearto"} size={25} color={"white"} />
              <Text style={{ fontSize: 10, color: "white", paddingTop: 10 }}>
                {item.likes} K
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingVertical: 5,
              }}>
              <FontAwesome name={"comment-o"} size={25} color={"white"} />
              <Text style={{ fontSize: 10, color: "white", paddingTop: 10 }}>
                {item.comment}
              </Text>
            </View>
            <Feather
              name={"send"}
              size={25}
              color={"white"}
              style={{
                transform: [{ rotateZ: "20deg" }],
              }}
            />
            <AntDesign
              name={"ellipsis1"}
              size={20}
              color={"white"}
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
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
