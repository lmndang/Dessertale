import React, {component} from "react";
import { View, StyleSheet} from "react-native";

export default function ViewProducts(props) {
    return (
      <View style={[viewStyle.container, props.style]}>
        {props.children}
      </View>
    );
  }
  const viewStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        // backgroundColor: '#FFC4C4',
        height: 250,
        width: 370,
        marginVertical: 10,
        borderBottomColor: '#9B9B9B',
        borderBottomWidth: 1,
      },
  });