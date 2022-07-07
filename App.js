//Les méthode pour la bottomBar
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Les differents Screens
import HomeScreen from "./src/pages/home/HomeScreen";
import Shopping from "./src/pages/shopping/Shopping";
import Profile from "./src/pages/profile/Profile";
import Reels from "./src/pages/reels/Reels";
import Search from "./src/pages/search/Search";
import Status from "./src/components/status/Status";

//Les Icons
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import Story from "./src/components/story/Story";
import Users from "./src/data/data";

export default function App() {
  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 100,
          },

          tabBarIcon: ({ focused, colour }) => {
            if (route.name === "Home") {
              if (focused) {
                return <Entypo name={"home"} size={35} color={colour} />;
              } else {
                return (
                  <Feather name={"home"} size={35} backgroundColor={"white"} />
                );
              }
            } else if (route.name === "Search") {
              if (!focused) {
                return <Feather name={"search"} size={35} color={colour} />;
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
                return <Story user={Users[1]} size={35} footer={true} />;
              } else {
                return (
                  <Story
                    user={Users[1]}
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

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Bottom' component={BottomTabScreen} />
        <Stack.Screen name='Status' component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
