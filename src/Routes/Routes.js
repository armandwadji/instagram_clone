//Import des tables de navigations
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Les differents Screens
import HomeScreen from "../pages/home/HomeScreen";
import Shopping from "../pages/shopping/Shopping";
import Profile from "../pages/profile/Profile";
import Reels from "../pages/reels/Reels";
import Search from "../pages/search/Search";

//Les Icons
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import Users from "../data/data";
import ProfilPicture from "../components/profilPicture/ProfilPicture";

const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: "8%",
        },

        tabBarIcon: ({ focused, colour }) => {
          if (route.name === "Home") {
            if (focused) {
              return <Entypo name={"home"} size={35} />;
            } else {
              return <Feather name={"home"} size={35} />;
            }
          } else if (route.name === "Search") {
            if (!focused) {
              return <Feather name={"search"} size={35} />;
            } else {
              return <FontAwesome name={"search"} size={35} />;
            }
          } else if (route.name === "Reels") {
            if (!focused) {
              return <Octicons name={"video"} size={35} />;
            } else {
              return <Entypo name={"video"} size={35} />;
            }
          } else if (route.name === "Shopping") {
            if (!focused) {
              return <Feather name={"shopping-bag"} size={35} />;
            } else {
              return <FontAwesome name={"shopping-bag"} size={35} />;
            }
          } else if (route.name === "Profile") {
            if (!focused) {
              return (
                <ProfilPicture img={Users[0].img} size={35} footer={true} />
              );
            } else {
              return (
                <ProfilPicture
                  img={Users[0].img}
                  size={35}
                  footer={true}
                  footerLink={true}
                />
              );
            }
          }
        },
      })}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Reels' component={Reels} />
      <Tab.Screen name='Shopping' component={Shopping} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
