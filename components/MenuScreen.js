import React, { useState } from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

const ITEMS = [
  {
    id: "1",
  name: "Cakes",
  image: "",
},
  {
    id: "2",
  name: "Ice Creams",
  image: "",
},
  {
    id: "3",
  name: "Cupcakes",
  image: "",
},
  {
    id: "4",
  name: "Waffles",
  image: "",
},
  {
    id: "5",
  name: "Pancakes",
  image: "",
},];

// items.fill(null)
// .map((v, i) => ({key: i.toString(), title: `${v}`}))

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[style.item, backgroundColor]}>
    <Text style={[style.name, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

import Products from "./components/Products";

const MenuScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FF869E" : "#FFC4C4";
    const color = item.id === selectedId ? "white" : "#A10035";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
  },
  item: {
    borderRadius: 24,
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 22,
  },
});

export default MenuScreen;
