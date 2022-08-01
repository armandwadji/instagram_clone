import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Utils";

const styles = StyleSheet.create({
  highlightsStories: {
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
  highlightsStoriesLists: {
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
  highlightsStoriesText: {
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
