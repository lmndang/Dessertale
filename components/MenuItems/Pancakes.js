import React, { useState, useEffect } from "react";
import { FlatList , TouchableOpacity} from "react-native";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";
import ImageContainer from "../ImageContainer";
import ScrollViewStyle from "../AppStyles/ScrollViewStyle";

//Cakes Screen
const Pancakes = (props) => {
  const [pancakes, setPancakes] = useState([]);
  const [crepes, setCrepes] = useState([]);

  useEffect(() => {
    fetch("https://dessertale-api.herokuapp.com/MenuPancakes")
      .then((response) => response.json())
      .then((data) => {
        setPancakes(data.Pancake);
        setCrepes(data.Crepes);
      });
  }, []);

  const navigation = props.getNavigationFromProps;

  return (
    <ScrollViewStyle>
      <ViewProducts>
        <TextStyle>Pancakes</TextStyle>
         <FlatList
         data = {pancakes}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Crepes</TextStyle>
        <FlatList
         data = {crepes}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default Pancakes;
