import React, {component} from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";

const buttonWithBackground = props => {
    const content = (
      <View style = {[btnStyle.button, {backgroundColor: props.color}]}>
        <Text style={btnStyle.text}>{props.text}</Text>
      </View>
    )
  
    return<TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
  }

  const btnStyle = StyleSheet.create({
    button: {
      padding: 16,
      width: 350,
      height: 100,
      borderRadius: 24,
      alignItems: 'flex-start',
      justifyContent: 'center',
      margin: 8
    },
    text: {
      color: 'white',
      fontSize: 20
    }
  });

  export default buttonWithBackground;