import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  singleReelsContainer: {
    width: windowWidth,
    height: windowHeight,
    position: "relative",
  },

  videoContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  video: {
    width: windowWidth,
    height: windowHeight,
    position: "absolute",
    top: 0,
    left: 0,
  },
  infosContainer: {
    position: "absolute",
    zIndex: 10,
    bottom: 80,
    height: "30%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  left: {
    height: "100%",
    width: "70%",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  titleLeft: {
    paddingHorizontal: 10,
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  followLeft: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    padding: 2,
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 5,
  },
  descriptionLeft: {
    color: "white",
    paddingBottom: 10,
    fontSize: 12,
  },
  footerLeft: {
    display: "flex",
    flexDirection: "row",
  },
  audioLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 15,
  },
  audioDescriptionLeft: {
    paddingLeft: 10,
    color: "white",
    textTransform: "capitalize",
    fontSize: 10,
  },

  right: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likesContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 5,
  },
  likesCount: { fontSize: 10, color: "white", paddingTop: 10 },

  commentsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 5,
  },
  commentCount: { fontSize: 10, color: "white", paddingTop: 10 },
});

export default styles;
