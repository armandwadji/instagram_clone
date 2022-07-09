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
    marginVertical: 5,
  },
  img_body: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    resizeMode: "cover",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  left: {
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
  plus: {
    opacity: 0.5,
    marginHorizontal: 10,
  },
  postAt: {
    opacity: 0.5,
  },
});

export default styles;
