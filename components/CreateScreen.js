import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Cupcake from "./CreateDessert/Cupcake"; 
import CakeMenu from "./CreateDessert/CakeMenu"; 
import IceCreamMenu from "./CreateDessert/IceCreamMenu"; 
import WaffleMenu from "./CreateDessert/WaffleMenu"; 

const Tab = createMaterialTopTabNavigator();

//Create
const CreateScreen = () => {
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cake" component={CakeMenu} />
      <Tab.Screen name="Waffle" component={WaffleMenu} />
      <Tab.Screen name="Ice Cream" component={IceCreamMenu} />
      <Tab.Screen name="Cupcake" component={Cupcake} cart/>
    </Tab.Navigator>
  );
};
export default CreateScreen;