import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

// Import des screens :
import HomeScreen from "./containers/HomeScreen";
import ProductsScreen from "./containers/ProductsScreen";
import RandomProductScreen from "./containers/RandomProductScreen";
import CameraScreen from "./containers/CameraScreen";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarItemStyle: { width: 100 },
                headerShown: false,
              }}
            >
              <Tab.Screen
                name="Home"
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home-filled" size={24} color="grey" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen name="Home">
                      {() => <HomeScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen
                name="RandomProduct"
                options={{
                  tabBarLabel: "Scanned Product",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="carrot" size={24} color="grey" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen name="RandomProduct">
                      {() => <RandomProductScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen
                name="Products"
                options={{
                  tabBarLabel: "Products",
                  tabBarIcon: ({ color, size }) => (
                    <Fontisto name="list-1" size={24} color="grey" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen name="ProductsScreen">
                      {() => <ProductsScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen
                name="Camera"
                options={{
                  tabBarLabel: "Camera",
                  tabBarIcon: ({ color, size }) => (
                    <Fontisto name="camera" size={24} color="grey" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen name="CameraScreen">
                      {() => <CameraScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
