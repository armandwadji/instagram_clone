import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS } from "../../../utils/Utils";

const HighlightsStories = () => {
  const [highlightStories, setHighlightStories] = useState(true);
  let circles = [];
  let numberofCircles = 6;

  // Liste des stories à la une
  for (let index = 0; index < numberofCircles; index++) {
    circles.push(
      <TouchableOpacity key={index}>
        {index === 0 ? (
          <View
            style={[
              styles.highlightsStories,
              {
                width: 60,
                height: 60,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: COLORS.white,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",

                opacity: 0.7,
              },
            ]}>
            <Entypo name='plus' size={40} color={COLORS.white} />
          </View>
        ) : (
          <View
            style={[
              styles.highlightsStories,
              {
                width: 60,
                height: 60,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: COLORS.white,
                marginHorizontal: 8,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.white,
                opacity: 0.1,
              },
            ]}></View>
        )}
      </TouchableOpacity>
    );
  }
  return (
    <View>
      <View
        style={[
          styles.highlightsStoriesText,
          {
            marginVertical: 10,
            paddingLeft: 10,
            paddingRight: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}>
        <Text style={{ color: COLORS.white }}>Stories à la une</Text>
        <TouchableOpacity
          onPress={() => setHighlightStories(!highlightStories)}>
          <Feather
            color={COLORS.white}
            name={highlightStories ? "chevron-up" : "chevron-down"}
            size={15}
          />
        </TouchableOpacity>
      </View>
      {highlightStories && (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ marginBottom: 10 }}>
          {circles}
        </ScrollView>
      )}
    </View>
  );
};

export default HighlightsStories;

const styles = StyleSheet.create({});
