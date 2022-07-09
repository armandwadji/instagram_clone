import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import searchData from "../../../data/SearchData";
import styles from "./SearchContentStyle";

const SearchContent = ({ getData }) => {
  return (
    <View style={{ width: "100%" }}>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 && (
              <View style={styles.dataContainer}>
                {data.images.map((img, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      style={styles.imgContainer}
                      onPressIn={() => getData(img)}
                      onPressOut={() => getData(null)}>
                      <Image source={{ uri: img }} style={styles.img} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
            {/*  */}
            {data.id === 1 && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    width: Dimensions.get("window").width / 1.5,
                  }}>
                  {data.images.slice(0, 4).map((img, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={styles.imgContainer}
                        onPressIn={() => getData(img)}
                        onPressOut={() => getData(null)}>
                        <Image source={{ uri: img }} style={styles.img} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  style={{ marginHorizontal: 5 }}
                  onPressIn={() => getData(data.images[5])}
                  onPressOut={() => getData(null)}>
                  <Image
                    source={{ uri: data.images[5] }}
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                      height: Dimensions.get("window").height / 2.9,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            {/*  */}
            {data.id === 2 && (
              <View style={styles.dataContainer}>
                {data.images.map((img, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      style={styles.imgContainer}
                      onPressIn={() => getData(img)}
                      onPressOut={() => getData(null)}>
                      <Image source={{ uri: img }} style={styles.img} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
