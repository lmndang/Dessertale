import * as React from "react";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";

import ScrollViewStyle from "../AppStyles/ScrollViewStyle"

//Waffles Screen
const Waffles = () => {
  return (
    <ScrollViewStyle >
      <ViewProducts>
        <TextStyle>Plain Waffles</TextStyle>
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Topped Waffles</TextStyle>
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default Waffles;
