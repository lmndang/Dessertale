import * as React from "react";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";

import ScrollViewStyle from "../AppStyles/ScrollViewStyle"
//Cakes Screen
const Cakes = () => {
  return (
    <ScrollViewStyle >
      <ViewProducts>
        <TextStyle>Basic Cakes</TextStyle>
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Fruit Cakes</TextStyle>
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Cheese Cakes</TextStyle>
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default Cakes;
