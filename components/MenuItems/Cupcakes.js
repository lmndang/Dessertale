import React, { useState, useEffect } from "react";
import { FlatList , TouchableOpacity} from "react-native";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";
import ImageContainer from "../ImageContainer";
import ScrollViewStyle from "../AppStyles/ScrollViewStyle";

//Cakes Screen
const Cupcakes = (props) => {
  const [plain, setPlain] = useState([]);
  const [topped, setTopped] = useState([]);

  useEffect(() => {
    fetch("https://dessertale-api.herokuapp.com/MenuCupcake")
      .then((response) => response.json())
      .then((data) => {
        setPlain(data.CupcakesPlain);
        setTopped(data.CupcakesTopped);
      });
  }, []);

  const navigation = props.getNavigationFromProps;

  return (
    <ScrollViewStyle>
      <ViewProducts>
        <TextStyle>Plain Cupcakes</TextStyle>
         <FlatList
         data = {plain}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Topped Cupcakes</TextStyle>
        <FlatList
         data = {topped}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default Cupcakes;
