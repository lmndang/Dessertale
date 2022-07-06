import * as React from "react";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";

import ScrollViewStyle from "../AppStyles/ScrollViewStyle"

//Pancakes Screen
const Pancakes = () => {
  return (
    <ScrollViewStyle >
      <ViewProducts>
        <TextStyle>Single Pancakes</TextStyle>
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Stacked Pancakes</TextStyle>
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default Pancakes;
