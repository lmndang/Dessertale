import * as React from "react";
import { Text, View, Button } from "react-native";
import styles from "./Styles";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
        />
         <Button
        title="Go to Setting"
        onPress={() => navigation.navigate("Setting")}
        />
    </View>
  );
}

const Profile = () =>{
  return (
    <View style={styles.container}>
      <Text>Profile Page!</Text>
    </View>
  );
}

const Setting = () =>{
  return (
    <View style={styles.container}>
      <Text>Setting Page!</Text>
    </View>
  );
}

const MenuScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default MenuScreen;
