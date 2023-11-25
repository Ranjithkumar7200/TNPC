import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import OnBoardStack from "./src/screens/OnBoardStack/OnBoardStack";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./src/screens/bottomTabs/BottomTabs";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1, padding: 0, marginTop: 50 }}>
      <StatusBar style="auto" />
      <NavigationContainer screenOptions={{
            cardStyle: { backgroundColor: "white" },
          }}>
        <Stack.Navigator >
        <Stack.Screen name="OnBoardStack" options={{ headerShown: false }} component={OnBoardStack} />
        <Stack.Screen name="BottomTabs" options={{ headerShown: false }} component={BottomTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
