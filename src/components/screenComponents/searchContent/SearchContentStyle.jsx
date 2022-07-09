import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dataContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imgContainer: {
    paddingBottom: 5,
  },
  img: {
    width: Dimensions.get("window").width / 3.1,
    height: Dimensions.get("window").height / 6,
    margin: 1.5,
  },
});

export default styles;
