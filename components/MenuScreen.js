import * as React from "react";
import { Text, View, Button, TouchableOpacity, Image } from "react-native";
import styles from "./Styles";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Cake"
        onPress={() => navigation.navigate("Cake")}
      />
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
};

const Cake = ({ navigation }) => {
  const onPressButton = () => {
    navigation.navigate("Product");
  };
  return (
    <View style={styles.container}>
      <Text>Profile Page!</Text>
      <TouchableOpacity onPress={onPressButton}>

        <Image
          style={{ height: 100, width: 100 }}
          source={{
            uri: "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
          }}
        />
        
      </TouchableOpacity>
    </View>
  );
};

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Page!</Text>
    </View>
  );
};

const Product = () => {
  return (
    <View style={styles.container}>
      <Text>Product Page!</Text>
    </View>
  );
};

const MenuScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cake" component={Cake} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default MenuScreen;
