import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styles from "./Styles";

const CakeMenu = () => {
  const [cupcakeList, setCupcakeList] = useState([]);

  useEffect(() => {
    fetch("https://dessertale-api.herokuapp.com/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setCupcakeList(data.cake);
      });
  }, []);

  return (
    <View style={styles.container}>
      {cupcakeList.map((cupcake) => {
        if (cupcake.id === 1) {
          return <Text key={cupcake.id}>{cupcake.name}</Text>;
        }
      })}
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
