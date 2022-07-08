import * as React from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";

import ScrollViewStyle from "./AppStyles/ScrollViewStyle";

import {useAppContext} from "./context/appContext";

import ThemeButton from "./AppStyles/ThemeButton";

//Products Screen
const ProductDetail = (props) => {
  const { itemOnCart, addItemToCart } = useAppContext();
  const productDetailObj = props.route.params.detail;
  const productAddToCart = {name: productDetailObj.name, detail: productDetailObj.description, price: 12.75}

  const callFun = () => {
    addItemToCart(itemOnCart+1, productAddToCart);

    Alert.alert("Item added to cart", "");
  };

  return (
    <ScrollViewStyle style={productDetailStyle.background}>
      <View style={productDetailStyle.imageBox}>
        <Image
          style={productDetailStyle.image}
          source={{ uri: `${productDetailObj.img}` }}
        />
        <Text style={productDetailStyle.text}>{productDetailObj.name}</Text>
      </View>

      <Text style={productDetailStyle.description}>
          {productDetailObj.description}
        </Text>
        <Text style={productDetailStyle.title}>Nutritional Information</Text>
        <Text style={productDetailStyle.nutrition}>
          {productDetailObj.nutrition}
        </Text>

      <View style={productDetailStyle.btnBox}>
       <ThemeButton text="Add to cart"
       onPress= {callFun} />
      </View>
    </ScrollViewStyle>
  );
};

const productDetailStyle = StyleSheet.create({
  description: {
    textAlign: 'justify',
    margin: 15,
    color: '#555555',
    lineHeight: 20,
  },
  title: {
    textAlign: 'justify',
    margin: 15,
    marginBottom: 0,
    color: '#333333',
    fontSize: 20,
    // backgroundColor: "pink",
  },
  nutrition: {
    color: '#555555',
    textAlign: 'justify',
    marginTop: 10,
    margin: 15,
    lineHeight: 25,
    // backgroundColor: "green",
  },
  imageBox: {
    display: "flex",
    alignItems: "center",
  },

  image: {
    height: 135,
    width: 135,
    marginTop: 30,
  },

  text: {
    color: '#A10035',
    margin: 20,
    fontSize: 24,
  },

  btnBox: {
    // position:'absolute',
       alignSelf: "flex-end",
       bottom: 0,

    flex: 1,
    justifyContent: 'flex-end',
    // display: "flex",
    margin: 20,
    marginTop: 10,
  },

  background: {
    backgroundColor:'#FFC4C4'
  },
});

export default ProductDetail;
