import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Utils";

const styles = StyleSheet.create({
  headerContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  nameContainer: {
    // backgroundColor: "green",
    flex: 2.25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
    marginRight: 5,
  },
  icons: {
    // backgroundColor: "yellow",
    flex: 0.75,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
