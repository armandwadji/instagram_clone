import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  ProgressBarAndroidBase,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./StatusStyle";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Status = ({ route, navigation }) => {
  const { name, img } = route.params;
  let progress = 50;

  useEffect(() => {
    let timer = setTimeout(() => {
      //   navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start;

    return clearTimeout(timer);
  }, [progress]);

  return (
    <SafeAreaView backgroundColor='black'>
      <View style={styles.container}>
        <StatusBar
          backgroundColor='black'
          barStyle={"light-content"}
          animated={true}
        />
        <View style={styles.storybar}>
          <Animated.View
            style={[
              styles.storybar_content,
              { width: ProgressBarAndroidBase },
            ]}></Animated.View>
        </View>

        <View style={styles.header}>
          <View
            style={[
              styles.left,
              {
                padding: 15,
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              },
            ]}>
            <View
              style={{
                borderRadius: 100,
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Image
                source={{ uri: img }}
                style={{
                  borderRadius: 100,
                  backgroundColor: "orange",
                  resizeMode: "cover",
                  width: "92%",
                  height: "92%",
                }}
              />
            </View>

            <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>
              {name}
            </Text>
          </View>

          <View style={styles.rigth}>
            <TouchableOpacity>
              <FontAwesome5
                name={"ellipsis-h"}
                size={20}
                color='white'
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name={"close"}
                size={35}
                color='white'
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Image style={styles.imageProfil} source={{ uri: img }} />

        <View style={styles.footer}>
          <TextInput
            placeholder='Envoyer un message'
            placeholderTextColor={"white"}
            style={styles.message}
          />
          <View style={styles.icons}>
            <TouchableOpacity>
              <FontAwesome5 name={"heart"} size={25} color='white' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name={"send"}
                size={25}
                color='white'
                style={{
                  transform: [{ rotateZ: "20deg" }],
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Status;
