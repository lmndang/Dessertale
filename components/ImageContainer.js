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
    height: 135,
    width: 135,
    margin:15,
  },
});

export default ImageContainer;