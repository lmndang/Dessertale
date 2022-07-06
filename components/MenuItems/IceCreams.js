import * as React from "react";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";

import ScrollViewStyle from "../AppStyles/ScrollViewStyle"

//IceCreams Screen
const IceCreams = () => {
  return (
    <ScrollViewStyle >
      <ViewProducts>
        <TextStyle>Cones</TextStyle>
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Scoops</TextStyle>
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Tubs</TextStyle>
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default IceCreams;
