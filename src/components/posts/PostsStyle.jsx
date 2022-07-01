import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // marginTop: 5,
    overflowY: "hidden",
    marginTop: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  profil: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
  },
  name: {
    paddingLeft: 10,
  },
});

export default styles;
