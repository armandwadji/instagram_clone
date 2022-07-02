import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  story: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    width: 65,
    borderRadius: "100%",
    borderWidth: 2,
    borderColor: "#ae22e0",
    marginHorizontal: 5,
  },
  img_container_admin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    width: 65,
    borderRadius: "100%",
    borderWidth: 1.5,
    borderColor: "grey",
    marginHorizontal: 5,
    position: "relative",
  },
  icon: {
    position: "absolute",
    bottom: 5,
    right: 0,
    borderRadius: 100,
    backgroundColor: "teal",
  },
  name: {
    marginVertical: 5,
    fontSize: 10,
  },
});

export default styles;
