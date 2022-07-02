import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native-web";
import HomeScreen from "./src/pages/home/HomeScreen";

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}
