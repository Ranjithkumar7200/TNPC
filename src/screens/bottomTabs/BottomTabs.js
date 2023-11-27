import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from "@expo/vector-icons"; // Importing icons
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Transaction from "../transaction/Transaction";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
const navigation = useNavigation()
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "#fff",
      }}
      screenOptions={{
        tabBarActiveTintColor: "#8A2BE2",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size + 5} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="All Transations"
        component={Transaction}
        options={{
          
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="swap" color={color} size={size + 5} />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
              name="arrowleft"
              size={26}
              color="black"
              style={{ marginLeft: 10 }}
            />
            </TouchableOpacity>
          ),
          headerTitleStyle:{
            fontFamily:'Petrona-Bold',
            fontSize:26,
            alignItems:'center',
            justifyContent:'center'
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size + 5} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
