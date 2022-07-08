import * as React from "react";
import { Text, View } from "react-native";
import styles from "../Styles";
import Picker from "react-native-picker-horizontal";

const items = ["Regular", "Vegan", "Sugar Free", "Gluten Free"];

const Options = (props) => {
  const renderItem = (item, index) => (
    <View
      style={{
        width: 55,
        borderTopWidth: 40,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderBottomWidth: 40,
        height: 100,
      }}
    >
      <Text style={{ color: "#FF869E", fontSize: 8, fontStyle: "italic" }}>
        {item}
      </Text>
    </View>
  );

  const changeValue = (num) => {
    props.type(items[num]);
  };

  return (
    <View style={styles.container}>
      <Picker
        data={items}
        renderItem={renderItem}
        itemStyle={{}}
        itemWidth={55}
        initialIndex={0}
        onChange={(selected) => changeValue(selected)}
      />
    </View>
  );
};

export default Options;
