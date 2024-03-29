import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import styles from '../Styles';
import Options from './Options';

import ProductCreate from './ProductCreate';
import ScrollView from '../AppStyles/ScrollViewStyle';

import {useAppContext} from "../context/appContext";

import ThemeButton from "../AppStyles/ThemeButton";

const WaffleMenu = () => {

  const { itemOnCart, addItemToCart } = useAppContext();

  const [baseType, setBaseType] = useState('Regular');
  const [iceType, setIceType] = useState('Regular');


  const [base, setBase] = useState([]);
  const [baseName, setBaseName] = useState('');

  const [toppings, setToppings] = useState([]);
  const [toppingName, setToppingName] = useState('');

  const [ice, setIce] = useState([]);
  const [iceName, setIceName] = useState('');

  useEffect(() => {
    fetch('https://dessertale-api.herokuapp.com/waffle')
      .then((response) => response.json())
      .then((data) => {
        setBase(data.base);
        setBaseName(data.base[0].name);

        setToppings(data.toppings);
        setToppingName(data.toppings[0].name);
      });

    fetch('https://dessertale-api.herokuapp.com/IceCream')
      .then((response) => response.json())
      .then((data) => {
        setIce(data.Ice);
        setIceName(data.Ice[0].name);
      });
  }, []);

  const addToCart = () => {
    var str =
      baseType +
      ' ' +
      baseName +
      ' | ' +
      iceType +
      ' ' +
      iceName +
      ' | ' +
      toppingName;
    var waffle = { name: 'Custom Waffle', detail: str, price: 10.25 };
    addItemToCart(itemOnCart +1,waffle);
    Alert.alert("Custom waffle added to cart!", "");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View
          style={{
            borderTopWidth: 20,
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
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 2,
                textAlign: 'center',
              }}>
              Build Your Own Waffle
            </Text>
          </View>
        </View>
        <ProductCreate
          data={toppings}
          name={setToppingName}
          imgStyle={{ width: 140, height: 110 }}
        />
        <ProductCreate
          data={ice}
          name={setIceName}
          imgStyle={{ width: 130, height: 130 }}
        />
         <Options type={setIceType} currentType={iceType} /> 
        <View
          style={{
            borderTopWidth: 20,
            borderTopColor: 'transparent',
            borderBottomWidth: 15,
            borderBottomColor: 'transparent',
          }}>
          <ProductCreate
            data={base}
            name={setBaseName}
            imgStyle={{ width: 220, height: 180 }}
          />
          <Options type={setBaseType} currentType={baseType} />
        </View>
        
        <View style= {{display: 'flex', alignItems:'center'}}>
        <ThemeButton text="Add to cart"
       onPress= {addToCart}/></View>
      </ScrollView>
    </View>
  );
};

export default WaffleMenu;
