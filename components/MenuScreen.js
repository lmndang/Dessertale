import * as React from "react";
import { Text, View} from "react-native";
import styles from "./Styles";
import { createStackNavigator } from "@react-navigation/stack";
import ButtonWithBackground from "./ButtonWithBackground";

const Stack = createStackNavigator();

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ButtonWithBackground
        text="Cakes"
        onPress={() => navigation.navigate("Products")}
        color='#FF869E'
      />
      <ButtonWithBackground
        text="Ice Creams"
        onPress={() => navigation.navigate("Products")}
        color='#FF869E'
      />
      <ButtonWithBackground
        text="Cupcakes"
        onPress={() => navigation.navigate("Products")}
        color='#FF869E'
      />
      <ButtonWithBackground
        text="Waffles"
        onPress={() => navigation.navigate("Products")}
        color='#FF869E'
      />
      <ButtonWithBackground
        text="Pancakes"
        onPress={() => navigation.navigate("Products")}
        color='#FF869E'
      />
    </View>
  );
};

import Products from "./Products";

const MenuScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ItemMenu" component={Menu} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export default MenuScreen;
