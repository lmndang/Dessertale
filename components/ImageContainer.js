import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageContainer = (props) => {
  return (
    <View style={styles.imageBox}>
      <Image style={styles.images} source={{ uri: `${props.img}` }} />
      <Text style={{ textAlign: "center" }}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    // borderColor: "blue",
    // borderWidth: 1,
  },

  images: {
    height: 125,
    width: 125,
  },
});

export default ImageContainer;