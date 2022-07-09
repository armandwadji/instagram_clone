import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    //   backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginLeft: "auto",
    position: "relative",
  },
  textInput: {
    backgroundColor: "#ebebebee",
    width: "90%",
    paddingVertical: 5,
    borderRadius: 10,
    paddingLeft: 40,
    color: "black",
    fontSize: 20,
  },
  icon: {
    position: "absolute",
    left: "8%",
    opacity: 0.3,
  },
});

export default styles;
