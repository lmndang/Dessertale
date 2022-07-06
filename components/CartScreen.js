import React from "react";
import { Text, View,Button } from "react-native";
import styles from "./Styles";

import {useAppContext} from "./context/appContext";

//Cart Screen
const CartScreen = () => {

  const {itemOnCart} = useAppContext();

  return (
    <View style={styles.container}>
      <Text>{itemOnCart}</Text>
    </View>
  );
};
export default CartScreen;
