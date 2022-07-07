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
    return (<Cakes getNavigationFromProps={props.route.params.passNavigation}></Cakes>)
  }
  else if(btnClicked === "Ice Creams"){
    return (<IceCreams getNavigationFromProps={props.route.params.passNavigation}></IceCreams>)
  }
  else if(btnClicked === "Cupcakes"){
    return (<Cupcakes getNavigationFromProps={props.route.params.passNavigation}></Cupcakes>)
  }
  else if(btnClicked === "Waffles"){
    return (<Waffles getNavigationFromProps={props.route.params.passNavigation}></Waffles>)
  }
  else if(btnClicked === "Pancakes"){
    return (<Pancakes getNavigationFromProps={props.route.params.passNavigation}></Pancakes>)
  }
  
  
};

export default Products;
