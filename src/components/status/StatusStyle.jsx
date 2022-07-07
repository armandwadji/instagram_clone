import { StyleSheet } from "react-native";

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
    marginTop: 10,
    zIndex: 10,
  },

  storybar_content: {
    height: "100%",
    backgroundColor: "white",
    width: "50%",
    zIndex: 10,
  },

  header: {
    // backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    zIndex: 10,
    // marginRight: 20,
    // paddingRight: 50,
  },

  left: {},

  rigth: {
    // backgroundColor: "black",
    width: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 30,
    zIndex: 10,
  },

  imageProfil: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
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
    borderColor: "white",
    borderRadius: 25,
    width: "70%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    marginLeft: 5,
    color: "white",
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
