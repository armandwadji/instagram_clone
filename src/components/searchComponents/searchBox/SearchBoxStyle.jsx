import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Utils";

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
    marginLeft: "auto",
    position: "relative",
  },
  textInput: {
    backgroundColor: COLORS.background,
    width: "95%",
    paddingVertical: 8,
    borderRadius: 10,
    paddingLeft: 50,
    fontSize: 20,
  },
  icon: {
    position: "absolute",
    left: "8%",
    opacity: 0.2,
  },
});

export default styles;
