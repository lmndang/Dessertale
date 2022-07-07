import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
//import styles from "./Styles";

import { useAppContext } from "./context/appContext";

const windowWidth = Dimensions.get("window").width;
//const windowHeight = Dimensions.get("window").height;

//Cart Screen
const CartScreen = () => {
  const { cartData, itemOnCart, removeCartItem } = useAppContext();
  let subtotal = 0.0;
  let discount = 0.0;
  let tax = 0.0;
  let total = 0.0;

  let calculate = cartData.map((item) => {
    subtotal += item.price;
    return true;
  });

  // const removeBtnHandler = (id) =>{
  //   //console.log(id);
  //   console.log("This is got clicked");
  // }

  //Calculate total
  discount = subtotal * 0.1;
  total = subtotal - discount;
  tax = total * 0.13;
  total = total + tax;

  //Round number
  subtotal = subtotal.toFixed(2);
  discount = discount.toFixed(2);
  tax = tax.toFixed(2);
  total = total.toFixed(2);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          {cartData.map((item, index) => {
            return (
              <View key={index} style={styles.cartItemContainer}>
                <View>
                  <View style={styles.itemHeading}>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemPrice}>
                      ${item.price.toFixed(2)}
                    </Text>
                  </View>

                  <Text style={styles.itemDetails}>{item.detail}</Text>
                </View>

                <View style={styles.btnContainer}>
                  <View style={styles.btnRemove}>
                    <TouchableOpacity onPress={() => removeCartItem(itemOnCart - 1, index)}>
                      <Text style={styles.btnRemoveText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <View style={[styles.box, styles.totalItemContainer]}>
          <View style={styles.subTotal}>
            <Text style={styles.subTotalText}>Subtotal</Text>
            <Text style={styles.subTotalText}>${subtotal}</Text>
          </View>
          <View style={styles.subTotal}>
            <Text style={styles.subTotalText}>Promotion</Text>
            <Text style={styles.promotionTex}>-${discount}</Text>
          </View>
          <View style={styles.subTotal}>
            <Text style={styles.subTotalText}>Taxes</Text>
            <Text style={styles.subTotalText}>${tax}</Text>
          </View>
          <View style={styles.subTotal}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>${total}</Text>
          </View>
          <View style={styles.btnCheckout}>
            <TouchableOpacity  >
              <Text style={styles.btnCheckoutText}>PLACE ORDER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  box: {
    width: windowWidth - 20,
    marginTop: 20,
  },

  cartItemContainer: {
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FFC4C4",
  },

  itemHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF869E",
  },

  itemPrice: {
    fontSize: 18,
    textAlign: "right",
    color: "#7D9D9C",
    fontWeight: "bold",
  },

  itemDetails: {
    color: "gray",
    marginBottom: 10,
  },

  btnContainer: {
    display: "flex",
    alignItems: "flex-end",
  },

  btnRemove: {
    width: 100,
    backgroundColor: "#A10035",
    borderRadius: 5,
    height: 40,
  },

  btnRemoveText:{
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10
  },

  totalItemContainer: {
    padding: 10,
  },

  subTotal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  subTotalText: {
    color: "gray",
  },

  promotionTex: {
    color: "green",
  },

  totalText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },

  btnCheckout: {
    backgroundColor: "black",
    marginTop: 25,
    borderRadius: 5,
    height: 50,
  },

  btnCheckoutText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 13,
  },
});
export default CartScreen;
