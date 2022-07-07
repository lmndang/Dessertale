import React, { useState, useEffect } from "react";
import { FlatList , TouchableOpacity} from "react-native";
import TextStyle from "../AppStyles/TextStyle";
import ViewProducts from "../AppStyles/ViewProducts";
import ImageContainer from "../ImageContainer";
import ScrollViewStyle from "../AppStyles/ScrollViewStyle";

//Cakes Screen
const IceCreams = (props) => {
  const [sundaes, setSundaes] = useState([]);
  const [iceCreamBowls, setIceCreamBowls] = useState([]);
  const [cones, setCones] = useState([]);

  useEffect(() => {
    fetch("https://dessertale-api.herokuapp.com/MenuIceCream")
      .then((response) => response.json())
      .then((data) => {
        setSundaes(data.Sundaes);
        setIceCreamBowls(data.IceCreamBowls);
        setCones(data.Cones);
      });
  }, []);

  const navigation = props.getNavigationFromProps;

  return (
    <ScrollViewStyle>
      <ViewProducts>
        <TextStyle>Sundaes</TextStyle>
         <FlatList
         data = {sundaes}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Cones</TextStyle>
        <FlatList
         data = {cones}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
      <ViewProducts>
        <TextStyle>Ice Cream Bowls</TextStyle>
        <FlatList
         data = {iceCreamBowls}
         renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {detail: item})}><ImageContainer key={item.id} img={item.img} name={item.name} /></TouchableOpacity>}
         horizontal= {true}
         />
      </ViewProducts>
    </ScrollViewStyle>
  );
};

export default IceCreams;
