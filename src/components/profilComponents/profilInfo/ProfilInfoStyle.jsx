import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Utils";

const styles = StyleSheet.create({
  profilInfoContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 5,
    // alignItems: "center",
  },
  profilPicture: {
    // backgroundColor: "green",
    flex: 1,
  },
  followsInfosContainer: {
    // backgroundColor: "yellow",
    flex: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  followsInfos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  followsNumber: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.white,
  },
  followsTitle: {
    fontSize: 13,
    textTransform: "capitalize",
    color: COLORS.white,
  },
  description: {
    // backgroundColor: "green",
    // width: "70%",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  descInf: {
    color: COLORS.white,
  },
  webSite: {
    color: "skyblue",
  },
  editProfilContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  editProfil: {
    flex: 3.5,
    borderWidth: 1,
    backgroundColor: COLORS.background,
    borderRadius: 5,
  },
  editProfilText: {
    color: COLORS.white,
    textAlign: "center",
    padding: 2,
    letterSpacing: 1,
    // opacity: 0.8,
  },
  editProfilIcon: {
    flex: 0.2,
    borderWidth: 1,
    backgroundColor: COLORS.background,
    display: "flex",
    alignItems: "center",
    marginLeft: 5,
    padding: 2,
    borderRadius: 5,
    // opacity: 0.2,
  },
});

export default styles;
