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
        height: 280,
        width: 370,
        marginVertical: 10,
        borderBottomColor: '#A10035',
        borderBottomWidth: 1,
      },
  });