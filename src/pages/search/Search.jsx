import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
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
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBox />
          <SearchContent getData={getData} />
        </ScrollView>
        {image && (
          <View style={styles.modalContainer}>
            <StatusBar backgroundColor='#525252' barStyle='dark-content' />
            <View style={styles.modal}>
              <View style={styles.modalHeader}>
                <Image source={{ uri: image }} style={styles.imageHeader} />

                <Text style={styles.nameHeader}>Nom de l'utilisateur</Text>
              </View>
              <Image source={{ uri: image }} style={styles.bodyHeader}></Image>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;
