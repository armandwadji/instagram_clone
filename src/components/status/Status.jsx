import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./StatusStyle";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Status = ({ route, navigation }) => {
  const { name, img } = route.params;

  //Random images stories
  const [Img, setImg] = useState(img);

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();

    setImg("https://picsum.photos/600/900");

    return () => clearTimeout(timer);
  }, [name]);

  const progress = useRef(new Animated.Value(0)).current;

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ["0%", "100%"],
  });

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
              { width: progressAnimation },
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
                source={{ uri: Math.random() > 0.5 ? Img : img }}
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

        <Image
          style={styles.imageProfil}
          source={{ uri: Math.random() > 0.5 ? Img : img }}
        />

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