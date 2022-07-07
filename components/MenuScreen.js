import * as React from "react";
import { View } from "react-native";
import styles from "./Styles";
import { createStackNavigator } from "@react-navigation/stack";
import ButtonWithBackground from "./AppStyles/ButtonWithBackground";

const Stack = createStackNavigator();

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ButtonWithBackground
        text="Cakes"
        onPress={() => navigation.navigate("Products", { title: "Cakes", passNavigation: navigation })}
        color="#FF869E"
      />
      <ButtonWithBackground
        text="Ice Creams"
        onPress={() => navigation.navigate("Products", { title: "Ice Creams", passNavigation: navigation  })}
        color="#FF869E"
      />
      <ButtonWithBackground
        text="Cupcakes"
        onPress={() => navigation.navigate("Products", { title: "Cupcakes", passNavigation: navigation  })}
        color="#FF869E"
      />
      <ButtonWithBackground
        text="Waffles"
        onPress={() => navigation.navigate("Products", { title: "Waffles", passNavigation: navigation  })}
        color="#FF869E"
      />
      <ButtonWithBackground
        text="Pancakes and Crepes"
        onPress={() => navigation.navigate("Products", { title: "Pancakes", passNavigation: navigation  })}
        color="#FF869E"
      />
    </View>
  );
};

import Products from "./Products";
import ProductDetail from "./ProductDetail";

const MenuScreen = () => {
  return (
    <Stack.Navigator>
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
            backgroundColor: "#FF869E",
            height: 70,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        })}
      />

      <Stack.Screen name="ProductDetail" component={ProductDetail} 
      options={({ route }) => ({
        title: '',
        headerBackTitleVisible: false,
      })}/>
    </Stack.Navigator>
  );
};

export default MenuScreen;
