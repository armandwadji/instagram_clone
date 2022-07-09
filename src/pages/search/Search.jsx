import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./SearchStyle";
import SearchBox from "../../components/screenComponents/searchBox/SearchBox";
import SearchContent from "../../components/screenComponents/searchContent/SearchContent";
import Modal from "../../components/screenComponents/modal/Modal";

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
        {image && <Modal image={image} />}
      </View>
    </SafeAreaView>
  );
};

export default Search;
