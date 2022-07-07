import React, { useState } from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ProductDetail from "./ProductDetail";

import Cakes from "./MenuItems/Cakes";
import IceCreams from "./MenuItems/IceCreams";
import Cupcakes from "./MenuItems/Cupcakes";
import Waffles from "./MenuItems/Waffles";
import Pancakes from "./MenuItems/Pancakes";

const StackNav = createStackNavigator();

const Navigation = (props) => {
    const btnClicked = props.route.params.title;
    const {currProduct } = useState([]);

    if(btnClicked === "Cakes"){
        currProduct = Cakes;
      }
      else if(btnClicked === "Ice Creams"){
        currProduct = IceCreams;
      }
      else if(btnClicked === "Cupcakes"){
        currProduct = Cupcakes;
      }
      else if(btnClicked === "Waffles"){
        currProduct = Waffles;
      }
      else if(btnClicked === "Pancakes"){
        currProduct = Pancakes;
      }
  return (
    <StackNav.Navigator >
      <StackNav.Screen
       name="Current Product"
      component={currProduct}
      options={() => ({ 
        headerShown: false,
        })}
       />

      <StackNav.Screen 
      name="Details" 
      component={ProductDetail} 
      options={({ route }) => ({ 
        title: route.params.title,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#FF869E',
          height: 70,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
       })}/>
    </StackNav.Navigator>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    // borderColor: "blue",
    // borderWidth: 1,
  },

  images: {
    height: 135,
    width: 135,
    margin:15,
  },
});

export default Navigation;