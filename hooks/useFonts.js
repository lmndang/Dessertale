import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "Cookie-Regular": require("../assets/fonts/Cookie-Regular.ttf"),
    });
};