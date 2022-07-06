import * as React from "react";
import Cakes from "./MenuItems/Cakes";
import IceCreams from "./MenuItems/IceCreams";
import Cupcakes from "./MenuItems/Cupcakes";
import Waffles from "./MenuItems/Waffles";
import Pancakes from "./MenuItems/Pancakes";

//Products Screen
const Products = (props) => {
  const btnClicked = props.route.params.title;
  if(btnClicked === "Cakes"){
    return (<Cakes></Cakes>)
  }
  else if(btnClicked === "Ice Creams"){
    return (<IceCreams></IceCreams>)
  }
  else if(btnClicked === "Cupcakes"){
    return (<Cupcakes></Cupcakes>)
  }
  else if(btnClicked === "Waffles"){
    return (<Waffles></Waffles>)
  }
  else if(btnClicked === "Pancakes"){
    return (<Pancakes></Pancakes>)
  }
  
  
};

export default Products;
