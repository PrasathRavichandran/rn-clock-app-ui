import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AppStackProps } from "../types";
import Alarm from "../screens/alarm";
import Clock from "../screens/clock";

const AppStack = createStackNavigator<AppStackProps>() as any;

const Navigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name={"Clock"} component={Clock} />
    </AppStack.Navigator>
  );
};

export default Navigation;
