import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import OnBoardStack from "./src/screens/OnBoardStack/OnBoardStack";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./src/screens/bottomTabs/BottomTabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    "Petrona-Bold": require("./src/assets/fonts/Petrona-Bold.ttf"),
    "Petrona-Regular": require("./src/assets/fonts/Petrona-Regular.ttf"),
    "Petrona-Medium": require("./src/assets/fonts/Petrona-Medium.ttf"),
    "Petrona-SemiBold": require("./src/assets/fonts/Petrona-SemiBold.ttf"),
    "IbarraRealNova-Regular": require("./src/assets/fonts/IbarraRealNova-Regular.ttf"),
    "IbarraRealNova-Bold": require("./src/assets/fonts/IbarraRealNova-Bold.ttf"),
    "IbarraRealNova-Medium": require("./src/assets/fonts/IbarraRealNova-Medium.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <SafeAreaView style={{ flex: 1, padding: 0, marginTop: 50 }}>
      <StatusBar style="auto" />
      <NavigationContainer
        screenOptions={{
          cardStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Navigator>
        
          <Stack.Screen
            name="OnBoardStack"
            options={{ headerShown: false }}
            component={OnBoardStack}
          />
          <Stack.Screen
            name="BottomTabs"
            options={{ headerShown: false }}
            component={BottomTabs}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
