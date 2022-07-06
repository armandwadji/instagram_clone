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
    paddingRight: 15,
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
    justifyContent: "space-between",
    marginLeft: 2,
  },
  footer: {
    marginHorizontal: 10,
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  desc: {
    marginBottom: 5,
  },
  postAt: {
    opacity: 0.5,
  },
});

export default styles;
