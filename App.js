//Les méthode pour la bottomBar
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabScreen from "./src/Routes/Routes";
import Status from "./src/components/homeComponents/status/Status";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Bottom' component={BottomTabScreen} />
        <Stack.Screen name='Status' component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
