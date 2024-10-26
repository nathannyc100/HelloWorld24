import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import HomePage from "./src/screens/HomePage";
import EditProfile from "./src/screens/EditProfile";
import CameraPage from "./src/screens/CameraPage";
import CheckColor from "./src/screens/CheckColor";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true, // Set to false to hide header
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        <Stack.Screen name="Camera Page" component={CameraPage} />
        <Stack.Screen name="Check Color" component={CheckColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
