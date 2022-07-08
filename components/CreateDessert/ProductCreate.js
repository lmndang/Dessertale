import * as React from 'react';
import {  useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../Styles';
import { AntDesign } from '@expo/vector-icons';

const ProductCreate = (props) => {
  const data = props.data;

  const [id, setId] = useState(1);
  const imgStyle = props.imgStyle;

  const goLeft = () => {
    if (id === 1) {
      setId(data.length);
      let num = data.length - 1;
      props.name(data[num].name);
    } else {
      setId(id - 1);
      let num = id - 2;
      props.name(data[num].name);
    }
  };

  const goRight = () => {
    if (id === data.length) {
      setId(1);
      props.name(data[0].name);
    } else {
      setId(id + 1);
      props.name(data[id].name);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AntDesign.Button
          backgroundColor={'transparent'}
          name="caretleft"
          size={24}
          color="#FFC4C4"
          onPress={goLeft}
        />

        <View style={styles.column}>
          {data.map((d, index) => {
            if (d.id === id) {
              return (
                <Text style={styles.text} key={index}>
                  {d.name}&nbsp;
                </Text>
              );
            }
          })}

          {data.map((d) => {
            if (d.id === id) {
              return (
                <Image
                  key={d.id}
                  style={imgStyle}
                  source={{ uri: `${d.img}` }}
                />
              );
            }
          })}
        </View>

        <AntDesign.Button
          backgroundColor={'transparent'}
          name="caretright"
          size={24}
          color="#FFC4C4"
          onPress={goRight}
        />
      </View>
    </View>
  );
};

export default ProductCreate;