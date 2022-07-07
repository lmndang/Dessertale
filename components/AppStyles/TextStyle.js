import React, {component} from "react";
import { Text, StyleSheet} from "react-native";

export default function TextStyle(props) {
    return (
      <Text style={[txtStyle.text, props.style]}>
        {props.children}
      </Text>
    );
  }
  const txtStyle = StyleSheet.create({
    text:{
      margin: 5,
      fontSize: 25,
      // fontFamily: 'Cookie-Regular',
      color:'#9B9B9B',
      fontWeight: 'bold',
    },
  });