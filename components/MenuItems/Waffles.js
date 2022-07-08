import React, { useState, useEffect } from "react";
import { FlatList , TouchableOpacity} from "react-native";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";
import ImageContainer from "../ImageContainer";
import ScrollViewStyle from "../AppStyles/ScrollViewStyle";

//Cakes Screen
const Waffles = (props) => {
  const [waffles, setWaffles] = useState([]);
  const [bubblyWaffles, setBubblyWaffles] = useState([]);

  useEffect(() => {
    fetch("https://dessertale-api.herokuapp.com/MenuWaffle")
      .then((response) => response.json())
      .then((data) => {
        setWaffles(data.Waffles);
        setBubblyWaffles(data.WafflesBubbly);
      });
  }, []);

  const navigation = props.getNavigationFromProps;

  return (
    <ScrollViewStyle>
      <ViewProducts>
        <TextStyle>Waffles</TextStyle>
         <FlatList
         data = {waffles}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Bubbly Waffles</TextStyle>
        <FlatList
         data = {bubblyWaffles}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
     
    </ScrollViewStyle>
  );
};

export default Waffles;
