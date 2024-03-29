import React, { useState, useEffect } from "react";
import { FlatList , TouchableOpacity} from "react-native";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";
import ImageContainer from "../ImageContainer";
import ScrollViewStyle from "../AppStyles/ScrollViewStyle";

//Cakes Screen
const Cakes = (props) => {
  const [basicCakes, setBasicCakes] = useState([]);
  const [fruitCakes, setFruitCakes] = useState([]);
  const [cheeseCakes, setCheeseCakes] = useState([]);

  useEffect(() => {
    fetch("https://dessertale-api.herokuapp.com/CakeMenu")
      .then((response) => response.json())
      .then((data) => {
        setBasicCakes(data.basicCakes);
        setFruitCakes(data.fruitCakes);
        setCheeseCakes(data.cheeseCakes);
      });
  }, []);

  const navigation = props.getNavigationFromProps;

  return (
    <ScrollViewStyle>
      <ViewProducts>
        <TextStyle>Regular Cakes</TextStyle>
         <FlatList
         data = {basicCakes}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Fruit Cakes</TextStyle>
        <FlatList
         data = {fruitCakes}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Cheese Cakes</TextStyle>
        <FlatList
         data = {cheeseCakes}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default Cakes;
