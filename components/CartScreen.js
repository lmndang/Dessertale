import React, {useContext} from "react";
import { Text, View } from "react-native";
import styles from "./Styles";

import {AppContext} from "./context/appContext";

//Cart Screen
const CartScreen = () => {

  const mood = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>{mood}</Text>
    </View>
  );
};
export default CartScreen;
