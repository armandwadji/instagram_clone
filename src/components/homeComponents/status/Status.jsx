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
import { COLORS } from "../../../utils/Utils";

const Status = ({ route, navigation }) => {
  const { name, img } = route.params;

  //Random images stories
  const [Img, setImg] = useState(img);

  //Variable pour l'animation de la progress bar de la storie
  const progress = useRef(new Animated.Value(0)).current;

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

  //Animation de la progress bar
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ["0%", "100%"],
  });

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.storybar}>
          <Animated.View
            style={[
              styles.storybar_content,
              { width: progressAnimation },
            ]}></Animated.View>
        </View>

        <View style={styles.header}>
          <View style={styles.left}>
            <View style={styles.imgContainer}>
              <Image
                source={{ uri: Math.random() > 0.5 ? Img : img }}
                style={styles.img}
              />
            </View>

            <Text style={styles.name}>{name}</Text>
          </View>

          <View style={styles.rigth}>
            <TouchableOpacity>
              <FontAwesome5
                name={"ellipsis-h"}
                size={20}
                color={COLORS.white}
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
            placeholderTextColor={COLORS.white}
            style={styles.message}
          />
          <View style={styles.icons}>
            <TouchableOpacity>
              <FontAwesome5 name={"heart"} size={25} color={COLORS.white} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name={"send"}
                size={25}
                color={COLORS.white}
                style={{
                  transform: [{ rotateZ: "20deg" }],
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Status;
