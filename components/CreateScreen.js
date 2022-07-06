import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styles from "./Styles";

import { useAppContext } from "./context/appContext";

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
  const { itemOnCart, addItemToCart } = useAppContext();

  const buttonPressedHandler = () => {
    const cartItem = {
      name: "Custom Ice-cream",
      detail:
        "Regular cone | Chocolate | Heart-shaped sprinkles | Fruit passion",
      price: 10.25,
    };

    addItemToCart(itemOnCart + 1, cartItem);
  };

  return (
    <View style={styles.container}>
      <Text>Waffle</Text>
      <Button title="Add" onPress={buttonPressedHandler} />
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
