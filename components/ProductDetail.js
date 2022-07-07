import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

//Products Screen
const ProductDetail = (props) => {
  const productDetailObj = props.route.params.detail;

  const callFun = () => {
    alert("Image Clicked!!!");
  };

  return (
    <View>
      <View style={productDetailStyle.imageBox}>
        <Image
          style={productDetailStyle.image}
          source={{ uri: `${productDetailObj.img}` }}
        />
        <Text style={productDetailStyle.text}>{productDetailObj.name}</Text>
      </View>

      <View style={productDetailStyle.btnBox}>
      <AntDesign name="pluscircleo" style={productDetailStyle.plus} size={24} color="black"/>

        <TouchableOpacity activeOpacity={0.5} onPress={callFun}>
          <View style={productDetailStyle.btn}>
            <Text style={productDetailStyle.txt}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const productDetailStyle = StyleSheet.create({
  plus:{
    display: 'block',
    backgroundColor: 'pink',
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
    margin: 20,
    fontSize: 24,
  },

  btnBox: {
    display: "flex",
    margin: 20,
    marginTop: 300,
    backgroundColor: 'green',
  },

  btn: {
    backgroundColor: "#A10035",
    alignSelf: 'flex-end',
    width: 130,
    height: 60,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "white",
    fontSize: 18,
  },
});

export default ProductDetail;
