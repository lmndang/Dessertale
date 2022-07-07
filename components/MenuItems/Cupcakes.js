import * as React from "react";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";

import ScrollViewStyle from "../AppStyles/ScrollViewStyle"

//Cupcakes Screen
const Cupcakes = () => {
  return (
    <ScrollViewStyle >
      <ViewProducts>
        <TextStyle>Whipped Cream Cupcakes</TextStyle>
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Butter Cream Cupcakes</TextStyle>
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default Cupcakes;
