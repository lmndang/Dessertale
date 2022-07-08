import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

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
          <ScrollView horizontal={true}>
            {bestSellerList.map((item) => {
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
          </ScrollView>
        </View>
      </View>

      <View>
        <View style={styles.box}>
          <View>
            <Text style={styles.title}>Top Creations</Text>
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
    padding: 20,
    paddingTop: 120,
  },

  box: {
    height: 230,
    width: 370,
    marginLeft: 10,
    marginRight: 10,
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

  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    color: "#A10035",
    fontWeight: "bold",
  },

  images: {
    height: 125,
    width: 125,
  },
});
export default HomeScreen;
