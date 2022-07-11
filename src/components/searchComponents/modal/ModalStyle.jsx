import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: "rgba(52,52,52,0.8)",
  },

  modal: {
    position: "absolute",
    top: windowHeight / 15,
    left: windowWidth / 20,
    backgroundColor: "white",
    width: "90%",
    height: "70%",
    borderRadius: 15,
    zIndex: 1,
    elevation: 50,
  },

  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  imageHeader: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  nameHeader: {
    fontSize: 12,
    fontWeight: "600",
    paddingLeft: 8,
  },

  bodyHeader: {
    width: "100%",
    height: "80%",
  },
});

export default styles;
