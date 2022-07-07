import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";


import ScrollViewStyle from "./AppStyles/ScrollViewStyle";

//Products Screen
const ProductDetail = (props) => {
  const productDetailObj = props.route.params.detail;

  const callFun = () => {
    alert("Image Clicked!!!");
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
        <TouchableOpacity activeOpacity={0.5} onPress={callFun}>
          <View style={productDetailStyle.btn}>
            <Text style={productDetailStyle.txt}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'flex-end',
    // display: "flex",
    margin: 20,
    marginTop: 60,
  },

  btn: {
    position:'absolute',
    alignSelf: "flex-end",
    bottom: 0,
    width: 130,
    height: 50,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: { backgroundColor: "#A10035" },
      android: { backgroundColor: "#A10035"}
    })
  },
  txt: {
    color: "white",
    fontSize: 18,
  },

  background: {
    backgroundColor:'#FFC0CB'
  },
});

export default ProductDetail;
