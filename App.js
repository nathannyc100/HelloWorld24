import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import HomePage from "./src/screens/HomePage";
import NotFoundPage from "./src/screens/NotFoundPage";
import MapPage from "./src/screens/MapPage";
import EditProfile from "./src/screens/EditProfile";
import NewsAndEventsPage from "./src/screens/NewsAndEventsPage";

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
        <Stack.Screen name="React Native Maps" component={MapPage} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        <Stack.Screen name="NotFound" component={NotFoundPage} />
        <Stack.Screen name="NewsAndEventsPage" component={NewsAndEventsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
