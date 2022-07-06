import React, {component} from "react";
import { ScrollView, StyleSheet} from "react-native";

export default function ScrollViewStyle(props) {
    return (
      <ScrollView style={[scrollViewStyle.scrollView, props.style]}>
        {props.children}
      </ScrollView>
    );
  }

  const scrollViewStyle = StyleSheet.create({
    scrollView: {
      marginHorizontal: 10,
    },
  });