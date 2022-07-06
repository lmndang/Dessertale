import * as React from "react";
import { Text, View} from "react-native";
import styles from "./Styles";
import { createStackNavigator } from "@react-navigation/stack";
import ButtonWithBackground from "./AppStyles/ButtonWithBackground";

const Stack = createStackNavigator();

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ButtonWithBackground
        text="Cakes"
        onPress={() => 
          navigation.navigate("Products", {title: "Cakes"})}
        color='#FF869E'
      />
      <ButtonWithBackground
        text="Ice Creams"
        onPress={() => navigation.navigate("Products", {title: "Ice Creams"})}
        color='#FF869E'
      />
      <ButtonWithBackground
        text="Cupcakes"
        onPress={() => navigation.navigate("Products", {title: "Cupcakes"})}
        color='#FF869E'
      />
      <ButtonWithBackground
        text="Waffles"
        onPress={() => navigation.navigate("Products", {title: "Waffles"})}
        color='#FF869E'
      />
      <ButtonWithBackground
        text="Pancakes"
        onPress={() => navigation.navigate("Products", {title: "Pancakes"})}
        color='#FF869E'
      />
    </View>
  );
}

import Products from "./Products";

const MenuScreen = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
       name="Our Varieties!"
      component={Menu}
      options={() => ({ 
        headerShown: false,
        })}
       />

      <Stack.Screen 
      name="Products" 
      component={Products} 
      options={({ route }) => ({ 
        title: route.params.title,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#FF869E',
          height: 70,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
       })}/>
    </Stack.Navigator>
  );
};

export default MenuScreen;
