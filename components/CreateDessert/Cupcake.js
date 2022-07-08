import * as React from "react";
import { useEffect, useState } from "react";
import { Text, View, Button, Alert } from "react-native";
import styles from "../Styles";
import Options from "./Options";

import ProductCreate from "./ProductCreate";
import ScrollView from "../AppStyles/ScrollViewStyle";

import { useAppContext } from "../context/appContext";

const Cupcake = () => {
  const { itemOnCart, addItemToCart } = useAppContext();

  const [cakeType, setCakeType] = useState("Regular");
  const [icingType, setIcingType] = useState("Regular");
  const [toppingType, setToppingType] = useState("Regular");

  const [cakeList, setCakeList] = useState([]);
  const [cakeName, setCakeName] = useState("");

  const [icingList, setIcingList] = useState([]);
  const [icingName, setIcingName] = useState("");

  const [sprinkles, setSprinklesList] = useState([]);
  const [sprinklesName, setSprinklesName] = useState("");

  const [topping, setToppingList] = useState([]);
  const [toppingName, setToppingName] = useState("");

  useEffect(() => {
    fetch("https://dessertale-api.herokuapp.com/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setCakeList(data.cake);
        setCakeName(data.cake[0].name);

        setIcingList(data.icing);
        setIcingName(data.icing[0].name);

        setSprinklesList(data.sprinkles);
        setSprinklesName(data.sprinkles[0].name);

        setToppingList(data.topping);
        setToppingName(data.topping[0].name);
      });
  }, []);

  const addToCart = () => {
    var str =
      cakeType +
      " " +
      cakeName +
      " | " +
      icingType +
      " " +
      icingName +
      " | " +
      sprinklesName +
      " | " +
      toppingType +
      " " +
      toppingName;
    var cupcake = { name: "Custom Cupcake", detail: str, price: 12.25 };

    addItemToCart(itemOnCart + 1, cupcake);
    Alert.alert("Custom cupcake added to cart!", "");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View
          style={{
            borderTopWidth: 320,
            borderTopColor: "transparent",
            borderBottomWidth: 20,
            borderBottomColor: "transparent",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flex: 0.2,
            }}
          >
            <Text
              style={{
                color: "#FF869E",
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: 2,
                textAlign: "center",
              }}
            >
              Build Your Own Cupcake
            </Text>
          </View>
        </View>
        <ProductCreate
          data={sprinkles}
          name={setSprinklesName}
          imgStyle={{ width: 90, height: 90 }}
        />
        <View style={{ borderTopWidth: 20, borderTopColor: "transparent" }}>
          <ProductCreate
            data={topping}
            name={setToppingName}
            imgStyle={{ width: 90, height: 90 }}
          />
          <Options type={setToppingType} currentType={toppingType} />
        </View>
        <View
          style={{
            borderTopWidth: 20,
            borderTopColor: "transparent",
            borderBottomWidth: 20,
            borderBottomColor: "transparent",
          }}
        >
          <ProductCreate
            data={icingList}
            name={setIcingName}
            imgStyle={{ width: 190, height: 170 }}
          />
          <Options type={setIcingType} currentType={icingType} />
          <ProductCreate
            data={cakeList}
            name={setCakeName}
            imgStyle={{ width: 220, height: 160 }}
          />
          <Options type={setCakeType} currentType={cakeType} />
        </View>
        <Button color="#FFC4C4" title="Add" onPress={addToCart}></Button>
      </ScrollView>
    </View>
  );
};

export default Cupcake;
