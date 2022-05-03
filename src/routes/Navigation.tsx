import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AppStackProps } from "../types";

import { Clock, Alarm } from "../screens";

const AppStack = createStackNavigator<AppStackProps>();

const Navigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name={"Clock"} component={Clock} />
      <AppStack.Screen name={"Alarm"} component={Alarm} />
    </AppStack.Navigator>
  );
};

export default Navigation;
