import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../Styles';

import ProductCreate from './ProductCreate';
import ScrollView from '../AppStyles/ScrollViewStyle';

import {useAppContext} from "../context/appContext";

const Cupcake = () => {

  const { itemOnCart, addItemToCart } = useAppContext();

  const [cakeList, setCakeList] = useState([]);
  const [cakeName, setCakeName] = useState('');

  const [icingList, setIcingList] = useState([]);
  const [icingName, setIcingName] = useState('');

  const [sprinkles, setSprinklesList] = useState([]);
  const [sprinklesName, setSprinklesName] = useState('');

  const [topping, setToppingList] = useState([]);
  const [toppingName, setToppingName] = useState('');

  useEffect(() => {
    fetch('https://dessertale-api.herokuapp.com/cupcakes')
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
      cakeName +
      ' | ' +
      icingName +
      ' | ' +
      sprinklesName +
      ' | ' +
      toppingName;
    var cupcake = { name: 'Custom Cupcake', detail: str, price: 12.25 };

    addItemToCart(itemOnCart +1,cupcake);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View
          style={{
            borderTopWidth: 320,
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
              Build Your Own Cupcake
            </Text>
          </View>
        </View>
        <ProductCreate
          data={sprinkles}
          name={setSprinklesName}
          imgStyle={{ width: 90, height: 90 }}
        />
        <View style={{ borderTopWidth: 20, borderTopColor: 'transparent' }}>
          <ProductCreate
            data={topping}
            name={setToppingName}
            imgStyle={{ width: 90, height: 90 }}
          />
        </View>
        <View
          style={{
            borderTopWidth: 20,
            borderTopColor: 'transparent',
            borderBottomWidth: 20,
            borderBottomColor: 'transparent',
          }}>
          <ProductCreate
            data={icingList}
            name={setIcingName}
            imgStyle={{ width: 190, height: 170 }}
          />
          <ProductCreate
            data={cakeList}
            name={setCakeName}
            imgStyle={{ width: 220, height: 160 }}
          />
        </View>
        <Button color="#FFC4C4" title="Add" onPress={addToCart}></Button>
      </ScrollView>
    </View>
  );
};

export default Cupcake;
