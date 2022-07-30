import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./SearchStyle";
import SearchBox from "../../components/searchComponents/searchBox/SearchBox";
import SearchContent from "../../components/searchComponents/searchContent/SearchContent";
import Modal from "../../components/searchComponents/modal/Modal";
import { COLORS } from "../../utils/Utils";

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = (data) => {
    setImage(data);
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black }}>
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
