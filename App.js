import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import MenuScreen from "./components/MenuScreen";
import CreateScreen from "./components/CreateScreen";
import HomeScreen from "./components/HomeScreen";
import CartScreen from "./components/CartScreen";
import MoreScreen from "./components/MoreScreen";

import {AppContextProvider} from "./components/context/appContext";

import { LogBox } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  return (
    <AppContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Menu") {
                return <Feather name="menu" size={24} color={color} />;
              } else if (route.name === "Create") {
                return (
                  <MaterialCommunityIcons
                    name="cupcake"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Home") {
                return <AntDesign name="home" size={size} color={color} />;
              } else if (route.name === "Cart") {
                return (
                  <Feather name="shopping-cart" size={size} color={color} />
                );
              } else if (route.name === "More") {
                return (
                  <Feather name="more-horizontal" size={size} color={color} />
                );
              }
            },

            tabBarActiveTintColor: "#FF869E",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Menu" component={MenuScreen} />
          <Tab.Screen name="Create" component={CreateScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
