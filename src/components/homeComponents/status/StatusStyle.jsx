import { StyleSheet } from "react-native";
import { COLORS, windowHeight, windowWidth } from "../../../utils/Utils";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  storybar: {
    height: 3,
    width: "95%",
    borderWidth: 1,
    backgroundColor: "grey",
    marginTop: 50,
    zIndex: 10,
  },

  storybar_content: {
    height: "100%",
    backgroundColor: COLORS.white,
    width: "50%",
    zIndex: 10,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    zIndex: 10,
  },

  left: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  imgContainer: {
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    borderRadius: 100,
    backgroundColor: "orange",
    resizeMode: "cover",
    width: "92%",
    height: "92%",
  },

  rigth: {
    width: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 30,
    zIndex: 10,
  },

  imageProfil: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: "cover",
    position: "absolute",
  },

  name: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
  },

  footer: {
    width: "100%",
    marginVertical: 10,
    position: "absolute",
    bottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  message: {
    borderColor: COLORS.white,
    borderRadius: 25,
    width: "70%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    marginLeft: 5,
    color: COLORS.white,
  },

  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingRight: 10,
    width: "25%",
  },
});

export default styles;
