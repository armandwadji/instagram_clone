import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    height: "20%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    height: 35,
    width: 110,
    marginLeft: 10,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "35%",
    marginRight: 10,
  },
});

export default styles;
