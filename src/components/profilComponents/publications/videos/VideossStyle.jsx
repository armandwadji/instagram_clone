import { StyleSheet } from "react-native";
import { COLORS, windowHeight, windowWidth } from "../../../../utils/Utils";

const styles = StyleSheet.create({
  scrollContainer: {
    width: windowWidth,
    height: windowHeight,
  },
  series: {
    backgroundColor: COLORS.black,
    color: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    marginRight: 5,
    fontSize: 16,
    fontWeight: "700",
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
