import React, {component} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Platform} from "react-native";

const themeButton = props => {
    const content = (
        <View style={btnStyle.btn}>
          <Text style={btnStyle.txt}>{props.text}</Text>
        </View>
      )
    
      return<TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>{content}</TouchableOpacity>
  }

  const btnStyle = StyleSheet.create({
    btn: {
      
        width: 130,
        height: 50,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
          ios: { backgroundColor: "#A10035" },
          android: { backgroundColor: "#A10035"}
        })
      },
      txt: {
        color: "white",
        fontSize: 18,
      },
  });

  export default themeButton;