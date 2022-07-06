import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";
import ImageContainer from "../ImageContainer";
import ScrollViewStyle from "../AppStyles/ScrollViewStyle";

//Cakes Screen
const Cakes = () => {
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

  return (
    <ScrollViewStyle>
      <ViewProducts>
        <TextStyle>Regular Cakes</TextStyle>
         <FlatList
         data = {basicCakes}
         renderItem={({item}) => <ImageContainer key={item.id} img={item.img} name={item.name} />}
         horizontal= {true}
         />
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Fruit Cakes</TextStyle>
        <FlatList
         data = {fruitCakes}
         renderItem={({item}) => <ImageContainer key={item.id} img={item.img} name={item.name} />}
         horizontal= {true}
         />
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Cheese Cakes</TextStyle>
        <FlatList
         data = {cheeseCakes}
         renderItem={({item}) => <ImageContainer key={item.id} img={item.img} name={item.name} />}
         horizontal= {true}
         />
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default Cakes;
