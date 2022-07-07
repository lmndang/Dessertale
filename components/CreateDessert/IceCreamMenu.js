import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import styles from '../Styles';

import ProductCreate from './ProductCreate';
import ScrollView from '../AppStyles/ScrollViewStyle';

import {useAppContext} from "../context/appContext";

const IceCreamMenu = () => {

  const { itemOnCart, addItemToCart } = useAppContext();

  const [cone, setCone] = useState([]);
  const [coneName, setConeName] = useState('');

  const [ice, setIce] = useState([]);
  const [iceName, setIceName] = useState('');

  const [sprinkles, setSprinkles] = useState([]);
  const [sprinklesName, setSprinklesName] = useState('');

  const [topping, setTopping] = useState([]);
  const [toppingName, setToppingName] = useState('');

  useEffect(() => {
    fetch('https://dessertale-api.herokuapp.com/IceCream')
      .then((response) => response.json())
      .then((data) => {
        setCone(data.cone);
        setConeName(data.cone[0].name);

        setIce(data.Ice);
        setIceName(data.Ice[0].name);

        setSprinkles(data.sprinkles);
        setSprinklesName(data.sprinkles[0].name);

        setTopping(data.topping);
        setToppingName(data.topping[0].name);
      });
  }, []);

  const addToCart = () => {
    var str =
      coneName + ' | ' + iceName + ' | ' + sprinklesName + ' | ' + toppingName;
    var iceCream = { name: 'Custom IceCream', detail: str, price: 6.75 };
    addItemToCart(itemOnCart +1,iceCream);
    Alert.alert("Custom cupcake added to cart!", "");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View
          style={{
            borderTopWidth: 435,
            borderTopColor: 'transparent',
            borderBottomWidth: 20,
            borderBottomColor: 'transparent',
          }}>
          <View
            style={{
              alignItems: 'center',
              flex: 0.2,
            }}>
            <Text
              style={{
                color: '#FF869E',
                fontFamily: 'Times New Roman',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 2,
                textAlign: 'center',
              }}>
              Build Your Own IceCream
            </Text>
          </View>
        </View>
        <ProductCreate
          data={sprinkles}
          name={setSprinklesName}
          imgStyle={{ width: 110, height: 100 }}
        />
        <View
          style={{
            borderTopWidth: 30,
            borderTopColor: 'transparent',
          }}>
          <ProductCreate
            data={topping}
            name={setToppingName}
            imgStyle={{ width: 120, height: 110 }}
          />
        </View>
        <View
          style={{
            borderTopWidth: 30,
            borderTopColor: 'transparent',
          }}>
          <ProductCreate
            data={ice}
            name={setIceName}
            imgStyle={{ width: 160, height: 160 }}
          />
        </View>
        <View
          style={{
            borderTopWidth: 20,
            borderTopColor: 'transparent',
            borderBottomWidth: 10,
            borderBottomColor: 'transparent',
          }}>
          <ProductCreate
            data={cone}
            name={setConeName}
            imgStyle={{ width: 225, height: 225 }}
          />
        </View>
        <Button color="#FFC4C4" title="Add" onPress={addToCart}></Button>
      </ScrollView>
    </View>
  );
};

export default IceCreamMenu;
