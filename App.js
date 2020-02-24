import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./routes/SplashScreen";
import Login from "./routes/Login";
import TabNavigation from "./routes/TabNavigation";
import Good from "./routes/Good";
import { Theme } from "./appConstants/AppConstants";
import ScreenCamera from "./screens/Camera";
import FilterScreen from "./screens/FilterScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createStackNavigator();

export default function App() {
  const option = {
    headerStyle: { backgroundColor: Theme.AppColor },
    leftLabelStyle: { color: "white" },
    headerTitleStyle: { color: "white" }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={option} name="Splash" component={SplashScreen} />
        <Stack.Screen
          options={option}
          name={Theme.ApplicationName}
          component={TabNavigation}
        />
        <Stack.Screen options={option} name="Good" component={Good} />
        <Stack.Screen options={option} name="Connection" component={Login} />
        <Stack.Screen options={option} name="Camera" component={ScreenCamera} />
        <Stack.Screen options={option} name="Filter" component={FilterScreen} />
        <Stack.Screen options={option} name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
