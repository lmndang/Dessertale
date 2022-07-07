import React from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
//import styles from "./Styles";

import { useAppContext } from "./context/appContext";

const windowWidth = Dimensions.get("window").width;
//const windowHeight = Dimensions.get("window").height;

//Cart Screen
const CartScreen = () => {
  const { cartData } = useAppContext();
  console.log(cartData);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.cartItemContainer}>
          <View>
            <View style={styles.itemHeading}>
              <Text style={styles.itemTitle}>Custom Ice-cream</Text>
              <Text style={styles.itemPrice}>$10.25</Text>
            </View>

            <Text style={styles.itemDetails}>
              Regular cone | Chocolate | Heart-shaped sprinkles | Fruit passion
            </Text>
          </View>

          <View style={styles.btnContainer}>
            <View style={styles.btnRemove}>
              <Button color="white" title="Remove" />
            </View>
          </View>
        </View>

        <View style={styles.cartItemContainer}>
          <View>
            <View style={styles.itemHeading}>
              <Text style={styles.itemTitle}>Custom Waffle</Text>
              <Text style={styles.itemPrice}>$12.75</Text>
            </View>

            <Text style={styles.itemDetails}>
              Regular Brussels Waffle | Mix of berries
            </Text>
          </View>

          <View style={styles.btnContainer}>
            <View style={styles.btnRemove}>
              <Button color="white" title="Remove" />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.box, styles.totalItemContainer]}>
        <View style={styles.subTotal}>
          <Text style={styles.subTotalText}>Subtotal</Text>
          <Text style={styles.subTotalText}>$23.00</Text>
        </View>
        <View style={styles.subTotal}>
          <Text style={styles.subTotalText}>Promotion</Text>
          <Text style={styles.promotionTex}>-$2.30</Text>
        </View>
        <View style={styles.subTotal}>
          <Text style={styles.subTotalText}>Taxes</Text>
          <Text style={styles.subTotalText}>$2.70</Text>
        </View>
        <View style={styles.subTotal}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>$23.40</Text>
        </View>
        <View style={styles.btnCheckout}>
        <Button color="white" title="Place Order" />
        </View>
       
      </View>
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
    borderBottomColor: "#FFC4C4"
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
    borderRadius: 5
  },

  totalItemContainer: {
    padding: 10
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

  totalText:{
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10
  },

  btnCheckout:{
    backgroundColor: "black",
    marginTop: 25,
    borderRadius: 5,
  }
});
export default CartScreen;
