import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styles from "./Styles";

const CakeMenu = () => {
  return (
    <View style={styles.container}>
      <Text>Cake</Text>
    </View>
  );
};

const WaffleMenu = () => {
  return (
    <View style={styles.container}>
      <Text>Waffle</Text>
    </View>
  );
};

const IceCreamMenu = () => {
  return (
    <View style={styles.container}>
      <Text>Ice Cream</Text>
    </View>
  );
};

const Cupcake = () => {
  return (
    <View style={styles.container}>
      <Text>Cupcake</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

//Create
const CreateScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cake" component={CakeMenu} />
      <Tab.Screen name="Waffle" component={WaffleMenu} />
      <Tab.Screen name="Ice Cream" component={IceCreamMenu} />
      <Tab.Screen name="Cupcake" component={Cupcake} />
    </Tab.Navigator>
  );
};
export default CreateScreen;
