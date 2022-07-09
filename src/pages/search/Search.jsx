import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  Text,
} from "react-native";
import React, { useState } from "react";
import styles from "./SearchStyle";
import SearchBox from "../../components/screenComponents/searchBox/SearchBox";
import SearchContent from "../../components/screenComponents/searchContent/SearchContent";

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = (data) => {
    setImage(data);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBox />
          <SearchContent getData={getData} />
        </ScrollView>
        {image && (
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1,
              backgroundColor: "rgba(52,52,52,0.8)",
            }}>
            <StatusBar backgroundColor='#525252' barStyle='dark-content' />
            <View
              style={{
                position: "absolute",
                top: windowHeight / 6,
                left: windowWidth / 10,
                backgroundColor: "white",
                width: 350,
                height: 465,
                borderRadius: 15,
                zIndex: 1,
                elevation: 50,
              }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                }}>
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                  }}
                />
                <View style={{ paddingLeft: 8 }}>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    Nom de l'utilisateur
                  </Text>
                </View>
              </View>
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: "80%" }}></Image>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;
