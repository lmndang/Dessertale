import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import MapView from "react-native-maps";
//import styles from "./Styles";

//More Screen
const MoreScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={require("../assets/logo.png")} />
        </View>
        <View>
          <Text style={styles.title}>About us!</Text>
          <Text style={styles.text}>
            Dessertale is an app and a service focused on taste, availability &
            delight for everyone. We believe, that you should not be worrying
            about the dietary restrictions and still be able to enjoy the sweet
            part of the world!
          </Text>
          <Text style={styles.text}>
            In our app, everything is easily accessible and customizable. People
            with health restrictions, allergies, and special food requirements
            have the exact nutritional information about the selected dessert
            within a couple of seconds.
          </Text>

          {/* <Text style={styles.text}>
          Customers can avoid long waiting queues at the bakery and all the
          uncomfortable business around it. Payment, shipping, and the overall
          shopping experience becomes a problem of the past. On top of it, our
          customers have a positive feeling and a better mood after having done
          the whole process in a couple of clicks!
        </Text> */}
          <Text style={styles.title}>Our Locations</Text>
          <View>
            <MapView
              style={styles.map}
              // showsUserLocation
              // followUserLocation
              // initialRegion={{
              //   latitude: 43.761539,
              //   longitude: -79.411079,
              //   latitudeDelta: 0.25,
              //   longitudeDelta: 0.04,
              // }}
            >
              <MapView.Marker
                title="Dessertale at Bayview Ave"
                description="Dessert shop"
                coordinate={{
                  latitude: 43.80923097725955,
                  longitude: -79.3994080192205,
                }}
              />

              <MapView.Marker
                title="Dessertale at Finch Ave"
                description="Dessert shop"
                coordinate={{
                  latitude: 43.75782426886745,
                  longitude: -79.52879503856856,
                }}
              />

              <MapView.Marker
                title="Dessertale at Downtown Toronto"
                description="Dessert shop"
                coordinate={{
                  latitude: 43.65427227229885,
                  longitude: -79.39222970122505,
                }}
              />
            </MapView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },

  imgContainer: {
    marginBottom: 20,
  },

  image: {
    height: 150,
    width: 150,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#A10035",
  },

  text: {
    marginBottom: 20,
    color: "gray",
  },

  map: {
    borderWidth: 1,
    borderColor: "gray",
    height: 235,
  },
});
export default MoreScreen;
