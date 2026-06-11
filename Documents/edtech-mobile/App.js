import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CompareScreen from "./src/screens/CompareScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#000000" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#0a0a0a",
              borderTopWidth: 1,
              borderTopColor: "rgba(255,255,255,0.06)",
              paddingBottom: 8,
              paddingTop: 8,
              height: 64,
            },
            tabBarActiveTintColor: "#3b82f6",
            tabBarInactiveTintColor: "#334155",
            tabBarLabelStyle: { fontSize: 11, fontWeight: "700", letterSpacing: 0.5 },
          }}
        >
          <Tab.Screen
            name="Courses"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Text style={{ fontSize: 20, color }}>📚</Text>
              ),
            }}
          />
          <Tab.Screen
            name="Compare"
            component={CompareScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Text style={{ fontSize: 20, color }}>⚖️</Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}