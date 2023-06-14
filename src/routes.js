import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/login/index";
import Home from "./screens/home/index";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={defaultOptions}
      >
        <Stack.Screen name="Login" component={Login} options={defaultOptions} />
        <Stack.Screen name="Home" component={Home} options={defaultOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const defaultOptions = {
  headerShown: false,
};
