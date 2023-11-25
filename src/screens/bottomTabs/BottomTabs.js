import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons"; // Importing icons
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Transaction from "../transaction/Transaction";

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor: '#fff',
    }}
  tabBarOptions={{
    showLabel: false,
    activeTintColor: '#8A2BE2',
    inactiveTintColor: 'gray',
    style:{
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#E6E6FA',
      borderRadius: 20,
    },
    
  }}
>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size+5} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Transation"
        component={Transaction}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="swap" color={color} size={size+5} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size+5} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
