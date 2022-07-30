import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    width: windowWidth,
    height: windowHeight,
    position: "relative",
  },
});

export default styles;
