import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import OnBoards from "./src/screens/onBoards/OnBoards";
import Login from "./src/screens/loginForm/Login";
import Register from "./src/screens/registerForm/Register";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1, padding: 0, marginTop: 50 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: { backgroundColor: "white" },
          }}
        >
          <Stack.Screen
            name="OnBoards"
            component={OnBoards}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
