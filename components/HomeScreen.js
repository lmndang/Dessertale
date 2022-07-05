import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
//import styles from "./Styles";

//Home Screen
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Best Seller</Text>
      </View>

      <View>
        <Text>Top Creation</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
  },

  box:{
    borderWidth: 1,
    borderColor: "red",
    textAlign: "left",
    height: 100,
    width: 100,
    marginBottom: 100,
    marginLeft: 100
  }
});
export default HomeScreen;
