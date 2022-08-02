import { StyleSheet } from "react-native";
import { COLORS, windowHeight, windowWidth } from "../../../../utils/Utils";

const styles = StyleSheet.create({
  scrollContainer: {
    width: windowWidth,
    height: windowHeight,
  },
  postsContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: COLORS.black,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
