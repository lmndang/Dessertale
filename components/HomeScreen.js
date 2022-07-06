import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
//import styles from "./Styles";

//Home Screen
const HomeScreen = () => {
  const [bestSellerList, setBestSellerList] = useState([]);
  const [topCreationList, setTopCreationList] = useState([]);

  useEffect(() => {
    fetch("https://dessertale-api.herokuapp.com/homePage")
      .then((response) => response.json())
      .then((data) => {
        setBestSellerList(data.bestSellers);
        setTopCreationList(data.topCreations);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Text style={styles.title}>Best Sellers</Text>
        </View>

        <View style={styles.imageContainer}>
          {bestSellerList.map((item) => {
            return (
              <View key={item.id} style={styles.imageBox}>
                <Image style={styles.images} source={{ uri: `${item.img}` }} />
                <Text style={{ textAlign: "center" }}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View>
        <View style={styles.box}>
          <View>
            <Text style={styles.title}>Top Creation</Text>
          </View>
          <View style={styles.imageContainer}>
            {topCreationList.map((item) => {
              return (
                <View key={item.id} style={styles.imageBox}>
                  <Image
                    style={styles.images}
                    source={{ uri: `${item.img}` }}
                  />
                  <Text style={{ textAlign: "center" }}>{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },

  box: {
    textAlign: "left",
    height: 250,
    width: 395,
    marginBottom: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFC4C4",
    borderRadius: 20,
  },

  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 180,
  },

  imageBox: {
    // borderColor: "blue",
    // borderWidth: 1,
  },

  images: {
    height: 125,
    width: 125,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    color: "#A10035",
    fontWeight: "bold",
  },
});
export default HomeScreen;
