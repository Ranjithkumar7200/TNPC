import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import OnBoardStack from "./src/screens/OnBoardStack/OnBoardStack";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./src/screens/bottomTabs/BottomTabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Notes from "./src/screens/notes/Notes";
import { Ionicons } from "@expo/vector-icons";
import Notification from "./src/screens/notifications/Notification";
import ImportantantDates from "./src/screens/importantDates/ImportantantDates";

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
    <SafeAreaView style={{ flex: 1, padding: 0 }}>
      <StatusBar style="auto" />
      <NavigationContainer
        screenOptions={{
          cardStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            cardStyle: { backgroundColor: "#fff" },
          }}
        >
          <Stack.Screen
            name="BottomTabs"
            options={{ headerShown: false }}  
            component={BottomTabs}
          />
          <Stack.Screen
            name="OnBoardStack"
            options={{ headerShown: false }}
            component={OnBoardStack}
          />
          <Stack.Screen
            name="Notes"
            component={Notes}
            options={{
              headerTitleAlign: "center",

              headerRight: () => (
                <TouchableOpacity>
                  <View style={styles.add}>
                    <View>
                      <Ionicons name="add" size={20} color="#fff" />
                    </View>
                  </View>
                </TouchableOpacity>
              ),
              headerTitleStyle: {
                fontFamily: "Petrona-Bold",
                fontSize: 26,
                alignItems: "center",
                justifyContent: "center",
              },
              headerStyle: {
                backgroundColor: "#fff",
              },
            }}
          />
          <Stack.Screen
            name="Notifications"
            component={Notification}
            options={{
              headerTitleAlign: "center",

              headerRight: () => (
                <TouchableOpacity>
                  <View >
                    <View style={styles.setting}>
                      <Ionicons name="settings-outline" size={20} color="#000000" />
                    </View>
                  </View>
                </TouchableOpacity>
              ),
              headerTitleStyle: {
                fontFamily: "Petrona-Bold",
                fontSize: 26,
                alignItems: "center",
                justifyContent: "center",
              },
              headerStyle: {
                backgroundColor: "#fff",
              },
            }}
          />
          <Stack.Screen
            name="Important Dates"
            component={ImportantantDates}
            options={{
              headerTitleAlign: "center",

              headerTitleStyle: {
                fontFamily: "Petrona-Bold",
                fontSize: 26,
                alignItems: "center",
                justifyContent: "center",
              },
              headerStyle: {
                backgroundColor: "#fff",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  add: {
    width: 20,
    height: 20,
    backgroundColor: "#8A2BE2",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  setting:{
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,

  }
});
