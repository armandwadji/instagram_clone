import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Posts from "./posts/Posts";
import Videoss from "./videos/Videoss";
import Tags from "./tags/Tags";

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { COLORS } from "../../../utils/Utils";

const Publications = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.black,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.white,
          height: 2.5,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === "Posts") {
            return (
              <MaterialCommunityIcons
                name={"grid"}
                size={24}
                color={"white"}
                style={[!focused && { opacity: 0.6 }]}
              />
            );
          } else if (route.name === "Videos") {
            return (
              <Octicons
                name={"video"}
                size={24}
                color={"white"}
                style={!focused && { opacity: 0.6 }}
              />
            );
          } else if (route.name === "Tags") {
            return (
              <SimpleLineIcons
                name={"user"}
                size={24}
                color={"white"}
                style={!focused && { opacity: 0.6 }}
              />
            );
          }
        },
      })}>
      <Tab.Screen name='Posts' component={Posts} />
      <Tab.Screen name='Videos' component={Videoss} />
      <Tab.Screen name='Tags' component={Tags} />
    </Tab.Navigator>
  );
};

export default Publications;

const styles = StyleSheet.create({});
