import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  post: {
    height: 800,
    overflowY: "hidden",
  },
  container: {
    overflowY: "hidden",
    marginTop: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  name: {
    paddingLeft: 10,
  },
  body: {
    // backgroundColor: "blue",
    marginVertical: 5,
  },
  img_body: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  left: {
    // backgroundColor: "red",
    width: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footer: {
    marginHorizontal: 10,
  },
});

export default styles;
