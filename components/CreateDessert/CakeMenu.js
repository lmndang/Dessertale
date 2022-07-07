import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import styles from '../Styles';

import ProductCreate from './ProductCreate';
import ScrollView from '../AppStyles/ScrollViewStyle';

import {useAppContext} from "../context/appContext";

const CakeMenu = () => {

  const { itemOnCart, addItemToCart } = useAppContext();
  
  const [cake, setCake] = useState([]);
  const [cakeName, setCakeName] = useState('');

  const [buttercream, setButtercream] = useState([]);
  const [buttercreamName, setButtercreamName] = useState('');

  const [toppings, setToppings] = useState([]);
  const [toppingName, setToppingName] = useState('');

  useEffect(() => {
    fetch('https://dessertale-api.herokuapp.com/cakes')
      .then((response) => response.json())
      .then((data) => {
        setCake(data.cake);
        setCakeName(data.cake[0].name);

        setButtercream(data.buttercream);
        setButtercreamName(data.buttercream[0].name);

        setToppings(data.toppings);
        setToppingName(data.toppings[0].name);
      });
  }, []);

  const addToCart = () => {
    var str = cakeName + ' | ' + buttercreamName + ' | ' + toppingName;
    var cake = { name: 'Custom Cake', detail: str, price: 50.45 };
    addItemToCart(itemOnCart +1,cake);
    Alert.alert("Custom cake added to cart!", "");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={{ borderTopWidth: 160 ,  borderTopColor: 'transparent'}}>
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
              Build Your Own Cake
            </Text>
         </View>
         <View style={{borderTopWidth: 50, borderTopColor: 'transparent'}}>
              <ProductCreate
                data={buttercream}
                name={setButtercreamName}
                imgStyle={{ width: 100, height: 100 }}
              />
              <ProductCreate
                data={toppings}
                name={setToppingName}
                imgStyle={{ width: 150, height: 80 }}
              />
              <View style={{borderTopWidth: 30, borderTopColor: 'transparent'}}>
                <ProductCreate
                  data={cake}
                  name={setCakeName}
                  imgStyle={{ width: 220, height: 190 }}
                />
              </View>
            </View>
          
        </View>
      <Button color="#FFC4C4" title="Add to Cart" onPress={addToCart}></Button>
      </ScrollView>
        
    </View>
  );
};

export default CakeMenu;