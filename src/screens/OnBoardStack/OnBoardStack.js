import React from "react";
import OnBoards from "../onBoards/OnBoards";
import Login from "../loginForm/Login";
import Register from "../registerForm/Register";
import { createStackNavigator } from "@react-navigation/stack";

const OnBoardStack = () => {
    const Stack = createStackNavigator();

return(
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
          <Stack.Screen
            name="Login"
            component={Login}
            
          />
        </Stack.Navigator>
  )};

  export default OnBoardStack;