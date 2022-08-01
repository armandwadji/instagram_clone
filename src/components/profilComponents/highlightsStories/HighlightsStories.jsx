import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS } from "../../../utils/Utils";
import styles from "./HighlightsStoriesStyle";

const HighlightsStories = () => {
  const [highlightStories, setHighlightStories] = useState(true);
  let circles = [];
  let numberofCircles = 6;

  // Liste des stories à la une
  for (let index = 0; index < numberofCircles; index++) {
    circles.push(
      <TouchableOpacity key={index}>
        {index === 0 ? (
          <View style={[styles.highlightsStories]}>
            <Entypo name='plus' size={40} color={COLORS.white} />
          </View>
        ) : (
          <View style={[styles.highlightsStoriesLists]}></View>
        )}
      </TouchableOpacity>
    );
  }
  return (
    <View>
      <View style={[styles.highlightsStoriesText]}>
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
