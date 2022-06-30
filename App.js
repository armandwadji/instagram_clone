import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native-web";
import HomeScreen from "./src/pages/home/HomeScreen";

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}
